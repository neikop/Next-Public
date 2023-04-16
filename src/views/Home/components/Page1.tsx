import { Avatar, Button, Container } from '@mui/material';

const Page1 = () => {
  return (
    <div style={{ background: `url(${require('assets/images/Background.Page1.png')})` }} className='text-white'>
      <Container className='pb-[120px]'>
        <div className='py-6'>
          <div className='flex items-center gap-2'>
            <Avatar src={require('assets/icons/Icon.SearchUser.png')} variant='square' />
            <span className='text-xl font-bold'>VIỆC LÀM ONLINE</span>
          </div>
        </div>

        <div className='flex items-center'>
          <div className='flex-1'>
            <div className='text-[72px] font-black' style={{ textShadow: '-4px -2px 8px rgba(60, 60, 60, 0.8)' }}>
              TUYỂN DỤNG
            </div>

            <div className='mt-[20px] flex flex-col items-start gap-[60px]'>
              <div className='flex flex-col gap-3 rounded-3xl bg-[#6d50ff] px-6 py-4'>
                <div className='flex items-center gap-2'>
                  <Avatar src={require('assets/icons/Icon.UserPhone.png')} />
                  <span className='text-2xl font-bold'>Nhân Viên Nhận Đơn Hàng</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Avatar src={require('assets/icons/Icon.UserCall.png')} />
                  <span className='text-2xl font-bold'>Nhân Viên Trực Điện Thoại</span>
                </div>
              </div>

              <div className='flex flex-col gap-2 bg-gradient-to-r from-primary-dark to-transparent px-4 py-4'>
                {[
                  { label: 'Chức vụ', value: 'Nhân viên' },
                  { label: 'Số lượng', value: '500' },
                  { label: 'Thời gian', value: 'Thoả thuận' },
                  { label: 'Lương', value: '200k - 1 triệu / ngày' },
                ].map((item, index) => (
                  <div key={index} className='flex items-center gap-2'>
                    <div className='h-2 w-2 rounded-full bg-white/60' />
                    <span className='text-xl'>
                      {item.label}: <b>{item.value}</b>
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <Button color='inherit' className='text-lg'>
                  Liên Hệ Ngay!
                </Button>
              </div>
            </div>
          </div>

          <div className='relative'>
            {[
              {
                icon: require('assets/icons/Icon.Bag.png'),
                label: 'Công Việc Ổn Định',
                position: { left: -20, top: '40%' },
              },
              {
                icon: require('assets/icons/Icon.Friend.png'),
                label: 'Môi Trường Thân Thiện',
                position: { left: -20, top: '70%' },
              },
              {
                icon: require('assets/icons/Icon.Dollar.png'),
                label: 'Thu Nhập Hấp Dẫn',
                position: { right: -40, top: '30%' },
              },
              {
                icon: require('assets/icons/Icon.Career.png'),
                label: 'Cơ Hội Thăng Tiến',
                position: { right: -40, top: '60%' },
              },
            ].map((item, index) => (
              <div key={index} className='absolute' style={item.position}>
                <div className='flex items-center gap-2 rounded-full bg-white px-4 py-2 text-primary-main shadow-md'>
                  <Avatar src={item.icon} />
                  <span className='text-xl'>{item.label}</span>
                </div>
              </div>
            ))}
            <img src={require('assets/images/Page1.Image.png')} className='w-[720px]' />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page1;
