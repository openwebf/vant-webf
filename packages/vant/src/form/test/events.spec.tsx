import { later, mount } from '../../../test';
import { submitForm, mountSimpleRulesForm } from './shared';
import { Form } from '..';
import { Field } from '../../field';

test('should emit submit event when submitting form', async () => {
  const onSubmit = jest.fn();
  const wrapper = mount({
    render() {
      return (
        <Form onSubmit={onSubmit}>
          <Field name="A" modelValue="bar" />
        </Form>
      );
    },
  });

  await submitForm(wrapper);

  expect(onSubmit).toHaveBeenCalledWith({ A: 'bar' });
});

test('should emit failed event when validating failed', async () => {
  const onFailed = jest.fn();
  const { form } = mountSimpleRulesForm({
    methods: {
      onFailed,
    },
  });

  await submitForm(form);

  expect(form.html()).toMatchSnapshot();
  expect(onFailed).toHaveBeenCalledWith({
    errors: [
      { name: 'A', message: 'A failed' },
      { name: 'B', message: 'B failed' },
    ],
    values: { A: '', B: '' },
  });
});

test('should emit failed event correctly when rule message is empty', async () => {
  const onFailed = jest.fn();
  const wrapper = mount({
    render() {
      return (
        <Form ref="form" onFailed={onFailed}>
          <Field name="A" rules={this.rulesA} modelValue="" />
        </Form>
      );
    },
    data() {
      return {
        rulesA: [{ required: true }],
      };
    },
  });

  await submitForm(wrapper);

  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ name: 'A', message: '' }],
    values: { A: '' },
  });
});

test('Field should emit start-validate event when validation start', async () => {
  const onStart = jest.fn();
  const wrapper = mount({
    render() {
      return (
        <Form>
          <Field
            name="A"
            rules={[{ required: true }]}
            modelValue="bar"
            onStart-validate={onStart}
          />
        </Form>
      );
    },
  });

  await submitForm(wrapper);
  expect(onStart).toHaveBeenCalledTimes(1);
});

test('Field should emit end-validate event when validation end', async () => {
  const onEnd = jest.fn();
  const rules = [
    {
      validator: () =>
        new Promise<boolean>((resolve) => {
          setTimeout(() => resolve(true), 10);
        }),
    },
  ];
  const wrapper = mount({
    render() {
      return (
        <Form>
          <Field
            name="A"
            rules={rules}
            modelValue="bar"
            onEnd-validate={onEnd}
          />
        </Form>
      );
    },
  });

  await submitForm(wrapper);
  expect(onEnd).toHaveBeenCalledTimes(0);
  await later(50);
  expect(onEnd).toHaveBeenCalledTimes(1);
});
