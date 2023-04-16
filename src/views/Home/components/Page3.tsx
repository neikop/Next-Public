import { Avatar, Container, Paper } from '@mui/material';

const Page3 = () => {
  return (
    <div style={{ background: `url(${require('assets/images/Background.Page3.png')})` }} className='text-white'>
      <Container className='flex justify-between'>
        <div
          className='flex-1 bg-contain bg-right'
          style={{ background: `url(${require('assets/images/Page3.Dancer.png')})` }}
        >
          <div className='py-6'>
            <div className='flex items-center gap-2'>
              <Avatar src={require('assets/icons/Icon.SearchUser.png')} variant='square' />
              <span className='text-xl font-bold'>VIỆC LÀM ONLINE</span>
            </div>
          </div>
          <div
            className='text-[72px] font-black leading-[80px]'
            style={{ textShadow: '-4px -2px 8px rgba(60, 60, 60, 0.8)' }}
          >
            TUYỂN DỤNG
          </div>
        </div>

        <div className='flex flex-col items-center py-[80px]'>
          <div className='flex space-x-[-12px]'>
            {[
              { icon: require('assets/icons/Icon.UserCall.png'), label: `Nhân Viên\nNhận\nĐơn Hàng` },
              { icon: require('assets/icons/Icon.UserPhone.png'), label: `Nhân Viên\nTrực\nĐiện Thoại` },
            ].map((item, index) => (
              <div
                key={index}
                className='flex h-[180px] w-[180px] flex-col items-center justify-center'
                style={{
                  clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
                  background: 'linear-gradient(0deg, #ffcfe9 0%, #d0ffca 100%)',
                }}
              >
                <Avatar src={item.icon} />
                <div className='mb-6 whitespace-pre-line text-center text-xl font-medium text-black'>{item.label}</div>
              </div>
            ))}
          </div>

          <div className='mt-[-24px] flex gap-3 rounded-3xl bg-[#6d50ff] p-6 pt-8'>
            {[
              { title: '01', content: 'Lương thưởng theo năng lực' },
              { title: '02', content: 'Chế độ đãi ngộ đầy đủ phúc lợi' },
              { title: '03', content: 'Môi trường làm việc vui vẻ, thân thiện' },
            ].map((item, index) => (
              <div key={index} className='flex flex-col items-center'>
                <div
                  className='mb-3 border-b-2 border-orange/60 text-3xl'
                  style={{
                    background: 'linear-gradient(45deg, #fff584, #f9b540)',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {item.title}
                </div>
                <div
                  className='h-full w-[120px] bg-[#691ddc] p-3 text-center'
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)' }}
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>

          <div className='mt-[100px] flex justify-center'>
            <div className='flex items-center rounded-3xl rounded-tr-none bg-[#3703e1] pr-3'>
              <img src={require('assets/images/Page3.Couple.png')} className='ml-[-12px] mt-[-60px]' />
              <Paper className='flex flex-col items-center rounded-3xl p-3'>
                <div className='text-xl font-bold text-primary-main'>THU NHẬP HẤP DẪN</div>
                <div className='text-2xl font-bold text-orange'>200K - 1 TRIỆU</div>
              </Paper>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page3;
