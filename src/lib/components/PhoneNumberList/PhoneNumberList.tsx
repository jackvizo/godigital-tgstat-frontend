import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { LoadingButton } from '@/lib/components/LoadingButton/LoadingButton';

export interface PhoneNumberListProps {
  phoneNumbers: Array<{ pk: string, phone_number: string, status: string | undefined }>;
  loadings: {
    isPhoneNumberSubmitting: boolean;
    is2FASubmitting: boolean;
  }
  onRequest2FA: (phoneNumber: string) => Promise<void>;
  onConfirm2FA: (phone_number: string, code_2fa: string, cloud_password?: string) => Promise<void>
  onRemovePhoneNumber: (phoneNumberPk: string) => Promise<void>;
}

const PhoneNumberItem: React.FC<{ phoneNumber: string, status: string | undefined, onRemove: () => void }> = (props) => (
  <Box display="flex" justifyContent="space-between" alignItems="center">
    <Typography>{props.phoneNumber}</Typography>
    {props.status === "banned" && <Typography color="error">Заблокировано</Typography>}
    <Button onClick={props.onRemove}>Удалить</Button>
  </Box>
);

const PhoneNumberList: React.FC<PhoneNumberListProps> = (props) => {
  const [isAdding, setIsAdding] = React.useState(false);
  const [newNumber, setNewNumber] = React.useState('');
  const [step, setStep] = React.useState(1);
  const [code, setCode] = React.useState('');
  const [cloudPassword, setCloudPassword] = React.useState('');

  const handleSubmitNumber = async () => {
    await props.onRequest2FA(newNumber)
    setStep(2);
  };

  const handleConfirmAdd = async () => {
    await props.onConfirm2FA(newNumber, code, cloudPassword);
    setStep(1);
    setIsAdding(false);
  };

  const handleCancel = () => {
    setStep(1);
    setIsAdding(false);
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Привязанные номера</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {props.phoneNumbers.map(phone => (
            <PhoneNumberItem
              key={phone.pk}
              phoneNumber={phone.phone_number}
              status={phone.status}
              onRemove={() => props.onRemovePhoneNumber(phone.pk)}
            />
          ))}
        </AccordionDetails>
      </Accordion>
      {isAdding ? (
        <Box>
          {step === 1 ? (
            <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems="center">
              <TextField
                label="Номер телефона"
                value={newNumber}
                onChange={(e) => setNewNumber(e.target.value)}
                disabled={props.loadings.isPhoneNumberSubmitting}
              />
              <Button onClick={handleSubmitNumber} disabled={props.loadings.isPhoneNumberSubmitting}>
                Отправить код
              </Button>
            </Box>
          ) : (
            <Box>
              <Typography>Введенный номер: {newNumber}</Typography>
              <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems="center">
                <TextField
                  label="Код 2FA"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  disabled={props.loadings.is2FASubmitting}
                />
                <TextField
                  label="Облачный пароль (необязательно)"
                  value={cloudPassword}
                  onChange={(e) => setCloudPassword(e.target.value)}
                  disabled={props.loadings.is2FASubmitting}
                />
              </Box>
              <LoadingButton loading={props.loadings.is2FASubmitting} onClick={handleConfirmAdd} disabled={props.loadings.is2FASubmitting}>
                Подтвердить
              </LoadingButton>
              <Button onClick={handleCancel} disabled={props.loadings.is2FASubmitting}>
                Назад
              </Button>
            </Box>
          )}
        </Box>
      ) : (
        <Button onClick={() => setIsAdding(true)}>Добавить номер телефона</Button>
      )}
    </div>
  );
};

export default PhoneNumberList;
