'use client';
import { stepLabel } from '@/types/types';
import Title from '@/components/Title';
import StepNavigator from '@/components/StepNavigator';
import Result from '@/components/Result';

export default function Page() {
  return (
    <>
      <Title text='聴いたことがない曲一覧' titleFlag={true} />
      <StepNavigator steps={stepLabel} currentStep={3} />
      <Result />
    </>
  );
}
