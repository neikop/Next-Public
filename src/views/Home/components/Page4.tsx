import { ArrowForward, Check } from '@mui/icons-material';
import { Container } from '@mui/material';
import { InfiniteSlider } from 'components';

const Page4 = () => {
  return (
    <div style={{ background: `url(${require('assets/images/Background.Page2.png')}` }} className='text-black'>
      <Container className='py-[80px]'>
        <div className='flex flex-col items-center gap-6'>
          <div className='text-3xl font-bold'>Việc Làm Online Lương Cao</div>
          <div className='text-xl font-medium'>
            Tuyển nhân viên làm việc Online -{' '}
            <span className='font-bold text-primary-main'>Chỉ cần có thời gian rảnh</span>
          </div>
          <div className='text-3xl font-bold'>
            <Check color='success' className='mb-1 mr-2 text-3xl' />
            {'ĐẢM BẢO '}
            <span className='text-[#ff4f57]'>
              <span className='text-5xl'>100</span>%
            </span>
            {' CÓ VIỆC LÀM'}
          </div>
        </div>

        <div className='my-[80px] flex justify-center gap-6'>
          {[
            { label: 'Yêu cầu: Nam nữ trên 18 tuổi' },
            { label: 'Thu nhập: Từ 200k đến 1 triệu' },
            { label: 'Chi cần có điện thoại là làm việc' },
          ].map((item, index) => (
            <div
              key={index}
              className='flex items-center gap-2 rounded-full px-6 py-4 font-medium text-white'
              style={{ background: 'linear-gradient(45deg, #1e27d2, #e433f9)' }}
            >
              <ArrowForward />
              {item.label}
            </div>
          ))}
        </div>

        <Container maxWidth='sm' className='px-0'>
          {/* https://fakedetail.com/fake-facebook-chat-generator */}
          <InfiniteSlider {...{ autoplaySpeed: 8000, autoplay: true, dots: true, arrows: true }}>
            {[
              { image: require('assets/images/Fake.Chat.1.png') },
              { image: require('assets/images/Fake.Chat.2.png') },
              { image: require('assets/images/Fake.Chat.3.png') },
              { image: require('assets/images/Fake.Chat.4.png') },
            ].map((item, index) => (
              <div key={index} className='flex justify-center'>
                <div className='relative h-[480px]'>
                  <img src={item.image} />
                </div>
              </div>
            ))}
          </InfiniteSlider>
        </Container>
      </Container>
    </div>
  );
};

export default Page4;
