export default {
  name: 'Nome',
  tel: 'Fone',
  save: 'Salvar',
  confirm: 'Confirmar',
  cancel: 'Cancelar',
  delete: 'Excluir',
  loading: 'Carregando...',
  noCoupon: 'Nenhum cupom',
  nameEmpty: 'Por favor, preencha o nome',
  addContact: 'Adicionar novo contato',
  telInvalid: 'Telefone em formato inválido',
  vanCalendar: {
    end: 'Fim',
    start: 'Início',
    title: 'Calendário',
    weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    monthTitle: (year: number, month: number) => `${month}/${year}`,
    rangePrompt: (maxRange: number) => `Escolha no máximo ${maxRange} dias`,
  },
  vanCascader: {
    select: 'Selecione',
  },
  vanPagination: {
    prev: 'Anterior',
    next: 'Próximo',
  },
  vanPullRefresh: {
    pulling: 'Puxe para atualizar...',
    loosing: 'Solte para atualizar...',
  },
  vanSubmitBar: {
    label: 'Total:',
  },
  vanCoupon: {
    unlimited: 'Ilimitado',
    discount: (discount: number) => `${discount * 10}% de desconto`,
    condition: (condition: number) => `Pelo menos ${condition}`,
  },
  vanCouponCell: {
    title: 'Cupom',
    count: (count: number) => `Você possui ${count} cupom(ns)`,
  },
  vanCouponList: {
    exchange: 'Usar',
    close: 'Fechar',
    enable: 'Disponível',
    disabled: 'Indisponível',
    placeholder: 'Código do cupom',
  },
  vanAddressEdit: {
    area: 'Área',
    postal: 'CEP',
    areaEmpty: 'Por favor, selecione uma área de recebimento',
    addressEmpty: 'Endereço não pode ser vazio',
    postalEmpty: 'CEP inválido',
    addressDetail: 'Endereço',
    defaultAddress: 'Usar como endereço padrão',
  },
  vanAddressList: {
    add: 'Adicionar novo endereço',
  },
};
