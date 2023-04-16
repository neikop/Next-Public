import { LoadingButton } from '@mui/lab';
import { Container, TextField } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';
import { Controller, useForm } from 'react-hook-form';
import { driverApi } from 'services';

const Page5 = () => {
  const { control, handleSubmit, reset } = useForm({ mode: 'onChange' });

  const { mutateAsync: write, isLoading } = useMutation(driverApi.write, {
    onSuccess: () => {
      reset();
      enqueueSnackbar(
        <div>
          <div>Cảm ơn bạn đã cũng cấp thông tin</div>
          <div>Chúng tôi sẽ liên hệ bạn sớm nhất có thể!</div>
        </div>,
      );
    },
  });

  const handleClickSubmit = () => {
    handleSubmit((values) => {
      write(values);
    })();
  };

  return (
    <div style={{ background: `url(${require('assets/images/Background.Page5.png')}` }} className='bg-top text-black'>
      <Container className='flex items-stretch py-[40px]'>
        <Container maxWidth='sm' className='ml-0 flex flex-col items-center px-0 py-[40px]'>
          <div className='text-3xl font-bold'>Đăng ký để được tư vấn miễn phí</div>

          <div className='mt-10 flex w-full flex-col items-center gap-6 px-20'>
            <Controller
              name='name'
              defaultValue={''}
              control={control}
              rules={{ required: 'Vui lòng điền thông tin' }}
              render={({ field, fieldState: { error } }) => (
                <TextField {...field} fullWidth label='Họ và tên' error={!!error} helperText={error?.message} />
              )}
            />
            <Controller
              name='phone'
              defaultValue={''}
              control={control}
              rules={{ required: 'Vui lòng điền thông tin' }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  fullWidth
                  label='Số điện thoại / Zalo'
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
            <Controller
              name='note'
              defaultValue={''}
              control={control}
              rules={{ required: 'Vui lòng điền thông tin' }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  fullWidth
                  multiline
                  label='Mức thu nhập mong muốn'
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />

            <LoadingButton
              variant='contained'
              fullWidth
              className='bg-secondary-gradient'
              loading={isLoading}
              onClick={handleClickSubmit}
            >
              ĐĂNG KÝ TƯ VẤN
            </LoadingButton>
          </div>
        </Container>

        <img src={require('assets/images/Page5.Form.png')} />
      </Container>
    </div>
  );
};

export default Page5;
