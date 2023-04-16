import { DoubleArrow } from '@mui/icons-material';
import { Avatar, Button, Chip, Container, Paper } from '@mui/material';

const Page2 = () => {
  return (
    <div style={{ background: `url(${require('assets/images/Background.Page2.png')}` }} className='text-black'>
      <Container className='py-[80px]'>
        <div className='flex flex-col items-center gap-6'>
          <div className='text-3xl font-bold'>
            Việc làm online <span className='text-primary-main'>lương cao</span> - Uy tín là số 1!
          </div>
          <div className='border-b text-xl font-medium text-orange'>THÔNG TIN CHI TIẾT</div>
          <div className='text-3xl font-bold'>
            SỐ LƯỢNG NHÂN VIÊN CẦN TUYỂN: <span className='text-primary-main'>1000 NHÂN VIÊN</span>
          </div>
        </div>

        <div className='my-[80px] flex justify-center gap-6'>
          {[
            { text: ['Nhân viên', 'Lên đơn hàng', '300', 'Nhân viên'] },
            { text: ['Nhân viên', 'Trực điện thoại', '200', 'Nhân viên'] },
            { text: ['Cộng tác viên', 'Viết content', '300', 'Nhân viên'] },
            { text: ['Xem Tiktok', 'Kiếm tiền', '200', 'Nhân viên'] },
          ].map((item, index) => (
            <Paper key={index} className='flex w-[240px] flex-col items-center gap-3 rounded-xl p-6'>
              <Avatar className='mt-[-44px] bg-white text-2xl font-bold text-primary-light shadow-base'>
                {index + 1}
              </Avatar>
              <div>{item.text[0]}</div>
              <div className='mt-[-8px]'>{item.text[1]}:</div>
              <div className='text-4xl font-bold text-orange'>{item.text[2]}</div>
              <div className='mt-[-8px]'>{item.text[3]}</div>
              <Button className='bg-secondary-gradient rounded-xl' fullWidth size='medium'>
                Đăng Ký
              </Button>
            </Paper>
          ))}
        </div>

        <div className='flex items-center justify-center gap-2 italic'>
          <DoubleArrow color='secondary' />
          <span>Mỗi ngày bạn có thể kiếm từ</span>
          <Chip size='small' className='bg-secondary-light font-bold text-white' label='200k - 1 triệu' />
          <span>đây là điều không hề khó khăn !!!</span>
        </div>
      </Container>
    </div>
  );
};

export default Page2;
