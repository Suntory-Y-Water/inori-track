import { stepLabel } from '@/types/types';
import Title from '@/components/Title';
import StepNavigator from '@/components/StepNavigator';
import Venue from '@/components/Venue';

export default function Page() {
  return (
    <>
      <Title text='☘参加した会場を選ぼう☘' titleFlag={true} />
      <StepNavigator steps={stepLabel} currentStep={2} />
      <Venue />
    </>
  );
}
