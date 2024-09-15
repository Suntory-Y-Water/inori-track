import { Link } from 'react-router-dom';
import { LiveName } from '@/data/live';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { FormValues } from '@/types';
import { useState } from 'react';
import Popup from '@/components/ui/popup';

const CheckBoxForms = ({ params }: { params: LiveName[] }) => {
  const [isAlertDialogOpen, setAlertDialogOpen] = useState(false);
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    defaultValues: {
      items: [],
    },
  });

  const handleButtonClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const selectedItems = form.watch('items');
    // Inori Minase LIVE TOUR 2024 heart bookmarkが選択されているかチェック
    const hasAcousticLive = selectedItems.includes('live-tour-2024-heart-bookmark');

    if (hasAcousticLive) {
      // Inori Minase LIVE TOUR 2024 heart bookmarkが選択されていた場合、Popup を表示
      setAlertDialogOpen(true);
    } else {
      // 選択されていない場合は通常の処理を実行
      proceedWithNavigation(selectedItems);
    }
  };

  // 選択されたアイテムでナビゲーションを実行する関数
  function proceedWithNavigation(selectedItems: string[]) {
    const queryParams = new URLSearchParams();
    selectedItems.forEach((item) => queryParams.append('live_id', item));
    navigate(`/venue?${queryParams.toString()}`);
  }

  // 'はい' ボタンがクリックされた時に実行する関数
  //  画面遷移する
  function confirmAcousticLive() {
    const selectedItems = form.watch('items');
    proceedWithNavigation(selectedItems);
    setAlertDialogOpen(false);
  }

  // 'いいえ' ボタンがクリックされた時に実行する関数
  // POPUPを非表示にする
  function cancelAcousticLive() {
    setAlertDialogOpen(false);
  }

  const inoriMinaseLives = params.filter((param) => param.liveType === '水瀬いのり個人名義');
  const townMeetingLives = params.filter((param) => param.liveType === '町民集会');

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name='items'
        render={() => (
          <FormItem>
            <div className='mt-4 mb-2'>
              <FormLabel className='font-bold text-xl'>水瀬いのり個人名義</FormLabel>
            </div>
            {inoriMinaseLives.map((inoriMinaseLive) => (
              <FormField
                key={inoriMinaseLive.id}
                control={form.control}
                name='items'
                render={({ field }) => (
                  <FormItem
                    key={inoriMinaseLive.id}
                    className='flex flex-row items-start space-x-3 space-y-0 py-1 pb-6'
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(inoriMinaseLive.id)}
                        onCheckedChange={(checked) =>
                          checked
                            ? field.onChange([...field.value, inoriMinaseLive.id])
                            : field.onChange(
                                field.value?.filter((value) => value !== inoriMinaseLive.id),
                              )
                        }
                      />
                    </FormControl>
                    <FormLabel className='font-normal'>{inoriMinaseLive.name}</FormLabel>
                  </FormItem>
                )}
              />
            ))}
            <div className='mt-4 mb-2'>
              <FormLabel className='font-bold text-xl'>町民集会</FormLabel>
            </div>
            {townMeetingLives.map((townMeetingLive) => (
              <FormField
                key={townMeetingLive.id}
                control={form.control}
                name='items'
                render={({ field }) => (
                  <FormItem
                    key={townMeetingLive.id}
                    className='flex flex-row items-start space-x-3 space-y-0 py-1 pb-6'
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(townMeetingLive.id)}
                        onCheckedChange={(checked) =>
                          checked
                            ? field.onChange([...field.value, townMeetingLive.id])
                            : field.onChange(
                                field.value?.filter((value) => value !== townMeetingLive.id),
                              )
                        }
                      />
                    </FormControl>
                    <FormLabel className='font-normal'>{townMeetingLive.name}</FormLabel>
                  </FormItem>
                )}
              />
            ))}
          </FormItem>
        )}
      />
      <Button
        variant='default'
        className='w-full items-center justify-center p-6 mt-6 mb-2 tracking-tight'
        disabled={form.watch('items').length === 0}
        onClick={handleButtonClick}
      >
        会場を選択する
      </Button>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Button
          variant='secondary'
          className='w-full items-center justify-center p-6 my-2 tracking-tight'
        >
          最初に戻る
        </Button>
      </Link>
      <Popup
        isOpen={isAlertDialogOpen}
        onClose={cancelAcousticLive}
        description='Inori Minase LIVE TOUR 2024 heart bookmarkのネタバレが含まれますが、よろしいですか？'
        okText='会場を選択する'
        cancelText='選び直す'
        onConfirm={confirmAcousticLive}
        onCancel={cancelAcousticLive}
      />
    </Form>
  );
};

export default CheckBoxForms;
