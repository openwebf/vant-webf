export default {
  name: 'نام',
  tel: 'تلفن',
  save: 'ذخیره',
  confirm: 'تایید',
  cancel: 'انصراف',
  delete: 'حذف',
  loading: 'در حال بارگزاری ...',
  noCoupon: 'بدون کوپن',
  nameEmpty: 'لطفا نام را وارد کنید',
  addContact: 'افزودن مخاطب',
  telInvalid: 'شماره تلفن ناقص',
  vanCalendar: {
    end: 'پایان',
    start: 'شروع',
    title: 'تقویم',
    weekdays: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `بیشتر از ${maxRange} روز انتخاب کنید`,
  },
  vanCascader: {
    select: 'انتخاب',
  },
  vanPagination: {
    prev: 'قبلی',
    next: 'بعدی',
  },
  vanPullRefresh: {
    pulling: 'بکشید تا تازه شود ...',
    loosing: 'رها کنید تا تازه شود ...',
  },
  vanSubmitBar: {
    label: 'مجموع:',
  },
  vanCoupon: {
    unlimited: 'نامحدود',
    discount: (discount: number) => `${discount * 10}% تخفیف`,
    condition: (condition: number) => `حداقل ${condition}`,
  },
  vanCouponCell: {
    title: 'کوپن',
    count: (count: number) => `شما ${count} کوپن دارید`,
  },
  vanCouponList: {
    exchange: 'تبادل',
    close: 'بستن',
    enable: 'موجود',
    disabled: 'ناموجود',
    placeholder: 'کد کوپن',
  },
  vanAddressEdit: {
    area: 'محدوده',
    postal: 'کد پستی',
    areaEmpty: 'لطفا یک منطقه برای دریافت انتخاب کنید',
    addressEmpty: 'آدرس نمی‌تواند خالی باشد',
    postalEmpty: 'کد پستی نامعتبر است',
    addressDetail: 'آدرس',
    defaultAddress: 'تنظیم به عنوان آدرس پیش فرض',
  },
  vanAddressList: {
    add: 'افزودن آدرس جدید',
  },
};
