import { ReactComponent as FoodIcon } from '@/assets/icons/food.svg';
import { ReactComponent as MedicalIcon } from '@/assets/icons/medical.svg';
import { ReactComponent as OtherIcon } from '@/assets/icons/other.svg';
import { ReactComponent as RescueIcon } from '@/assets/icons/rescue.svg';
import { ReactComponent as ShelterIcon } from '@/assets/icons/shelter.svg';
import { cn } from '@/lib/utils';
import { BaseInputProps } from '@/types/form';
import { RequestTypes } from '@/types/types';
import { forwardRef } from 'react';
import AssistanceTypeBlock from '../atoms/assistance-type-block';

interface AssistanceTypeProps extends BaseInputProps {
  value: RequestTypes[];
  onChange: (value: RequestTypes[]) => void;
}

const AssistanceTypeInput = forwardRef<HTMLDivElement, AssistanceTypeProps>((props, ref) => {
  const { value = [], onChange, label, optional, helperText } = props;
  const onTypeClick = (type: RequestTypes) => {
    if (value.includes(type)) {
      onChange(value.filter((v) => v !== type));
    } else {
      onChange([...value, type]);
    }
  };

  return (
    <div className={cn('flex flex-col gap-y-2.5')} ref={ref}>
      <div className="font-medium">
        <label>
          {label} {!optional && <span className="text-red-500">*</span>}
        </label>
        {helperText && <p className="text-xs text-gray-400">{helperText}</p>}
      </div>
      <div className="flex flex-row gap-2 flex-wrap">
        <AssistanceTypeBlock
          icon={ShelterIcon}
          title="Shelter"
          className="text-black"
          onClick={() => onTypeClick(RequestTypes.Shelter)}
          selected={value.includes(RequestTypes.Shelter)}
        />
        <AssistanceTypeBlock
          icon={FoodIcon}
          title="Food"
          className="text-teal-500"
          onClick={() => onTypeClick(RequestTypes.Food)}
          selected={value.includes(RequestTypes.Food)}
        />
        <AssistanceTypeBlock
          icon={RescueIcon}
          title="Rescue"
          onClick={() => onTypeClick(RequestTypes.Rescue)}
          selected={value.includes(RequestTypes.Rescue)}
        />
        <AssistanceTypeBlock
          icon={MedicalIcon}
          title="Medical Aid"
          onClick={() => onTypeClick(RequestTypes.MedicalAssistance)}
          selected={value.includes(RequestTypes.MedicalAssistance)}
        />
        <AssistanceTypeBlock
          icon={OtherIcon}
          className="text-black"
          title="Other"
          onClick={() => onTypeClick(RequestTypes.Other)}
          selected={value.includes(RequestTypes.Other)}
        />
      </div>

      {value.includes(RequestTypes.Other) && (
        <p className="text-xs text-gray-400">Make sure to describe your exact needs in the description field.</p>
      )}
    </div>
  );
});

AssistanceTypeInput.displayName = 'AssistanceTypeInput';

export default AssistanceTypeInput;
