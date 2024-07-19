import { LoadingButton } from '@/lib/components/LoadingButton/LoadingButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

export interface PhoneNumberListProps {
  phoneNumbers: Array<{ pk: string, phone_number: string, status: string | undefined }>;
  loadings: {
    isPhoneNumberSubmitting: boolean;
    is2FASubmitting: boolean;
  }
  errors: {
    request2fa: boolean;
    confirm2fa: boolean;
  }
  addingStep: 'idle' | 'request2fa' | 'confirm2fa' | 'done'
  isInitiallyExpanded?: boolean;
  resetAdd: () => void;
  onRequest2FA: (args: { phoneNumber: string, apiHash: string, apiId: string }) => Promise<void>;
  onConfirm2FA: (args: { code2fa: string, cloudPassword?: string }) => Promise<void>
  onRemovePhoneNumber: (phoneNumber: string) => Promise<void>;
}

const PhoneNumberItem: React.FC<{ phoneNumber: string, status: string | undefined, onRemove: () => Promise<void> }> = (props) => {
  const [isDeleting, setIsDeleting] = useState(false)

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography>{props.phoneNumber}</Typography>
      {props.status === "banned" && <Typography color="error">Заблокировано</Typography>}
      <LoadingButton size="small" onClick={async () => {
        setIsDeleting(true)
        try {
          await props.onRemove()
        } finally {
          setIsDeleting(false)
        }
      }} disabled={isDeleting} loading={isDeleting}>Удалить</LoadingButton>
    </Box>
  )
};

const PhoneNumberList: React.FC<PhoneNumberListProps> = (props) => {
  const [isAdding, setIsAdding] = React.useState(false);
  const [newNumber, setNewNumber] = React.useState('');

  const [code, setCode] = React.useState('');
  const [cloudPassword, setCloudPassword] = React.useState('');
  const [apiHash, setApiHash] = React.useState('');
  const [apiId, setApiId] = React.useState('');

  const handleSubmitNumber = () => {
    props.onRequest2FA({ phoneNumber: newNumber, apiHash, apiId })
  };

  const handleConfirmAdd = () => {
    props.onConfirm2FA({ code2fa: code, cloudPassword });
  };

  useEffect(() => {
    if (props.addingStep === 'done') {
      resetForm();
    }
  }, [props.addingStep])

  const handleCancel = () => {
    resetForm()
  };

  const handleToStep1 = () => {
    props.resetAdd()
    setCode('')
    setCloudPassword('')
  }

  const resetForm = () => {
    props.resetAdd()
    setNewNumber('')
    setCode('')
    setCloudPassword('')
    setApiHash('')
    setApiId('')
    setIsAdding(false)
  }

  return (
    <Box>
      <Accordion sx={{ mb: 2 }} defaultExpanded={props.isInitiallyExpanded}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Привязанные номера</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {props.phoneNumbers.map(phone => (
            <PhoneNumberItem
              key={phone.pk}
              phoneNumber={phone.phone_number}
              status={phone.status}
              onRemove={async () => props.onRemovePhoneNumber(phone.phone_number)}
            />
          ))}
          <Box sx={{ mt: 2 }}>
            {props.addingStep === 'idle' && !isAdding ? (
              <Button size="small" onClick={() => setIsAdding(true)}>Добавить номер телефона</Button>
            ) : null}

            {props.addingStep === 'request2fa' || (props.addingStep === 'idle' && isAdding) ? (
              <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="space-between" sx={{ gap: 2, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', gap: 1 }} flexDirection={{ xs: 'column', sm: 'row' }}>
                  <TextField
                    label="Номер телефона"
                    value={newNumber}
                    onChange={(e) => setNewNumber(e.target.value)}
                    disabled={props.loadings.isPhoneNumberSubmitting}
                    size='small'
                  />
                  <TextField
                    label="api id"
                    value={apiId}
                    onChange={(e) => setApiId(e.target.value)}
                    disabled={props.loadings.isPhoneNumberSubmitting}
                    size='small'
                  />
                  <TextField
                    label="api hash"
                    value={apiHash}
                    onChange={(e) => setApiHash(e.target.value)}
                    disabled={props.loadings.isPhoneNumberSubmitting}
                    size='small'
                  />
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }} flexDirection={{ xs: 'column', sm: 'row' }}>
                  <LoadingButton size="small" onClick={handleSubmitNumber} disabled={props.loadings.isPhoneNumberSubmitting} loading={props.loadings.isPhoneNumberSubmitting}>
                    Продолжить
                  </LoadingButton>
                  <Button size="small" onClick={handleCancel} disabled={props.loadings.isPhoneNumberSubmitting}>
                    Отмена
                  </Button>
                </Box>
              </Box>
            ) : null}

            {props.addingStep === 'confirm2fa' ? (
              <Box>
                <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="space-between" sx={{ gap: 2, flexWrap: 'wrap' }}>
                  <Box sx={{ display: 'flex', gap: 1 }} flexDirection={{ xs: 'column', sm: 'row' }}>
                    <TextField
                      label="Код 2FA"
                      size="small"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      disabled={props.loadings.is2FASubmitting}
                    />
                    <TextField
                      label="Облачный пароль (если установлен)"
                      size="small"
                      value={cloudPassword}
                      onChange={(e) => setCloudPassword(e.target.value)}
                      disabled={props.loadings.is2FASubmitting}
                      type='password'
                    />
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }} flexDirection={{ xs: 'column', sm: 'row' }}>
                    <LoadingButton size="small" loading={props.loadings.is2FASubmitting} onClick={handleConfirmAdd} disabled={props.loadings.is2FASubmitting}>
                      Подтвердить
                    </LoadingButton>
                    <Button size="small" onClick={handleToStep1} disabled={props.loadings.is2FASubmitting}>
                      Назад
                    </Button>
                  </Box>
                </Box>
              </Box>
            ) : null}

          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default PhoneNumberList;
