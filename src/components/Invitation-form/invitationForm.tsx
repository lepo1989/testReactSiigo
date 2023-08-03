import { SiigoButtonAtom as Button } from '@siigo/siigo-button-atom-react';
import { SiigoInputAtom as Input } from '@siigo/siigo-input-atom-react';
import { Panel } from '../shared-components/panel/panel';
import { useTranslation } from 'react-i18next';
import "./invitationForm.scss";

export function InvitationForm() {
  const { t } = useTranslation();

  return (
    <Panel width="26%" position="left">
      <h1 className='panel-title'>{t('UserActivation')}</h1>
      <p className='panel-decription'>{t('MessageRequiredData')}</p>
      <Input label={t('Names')} requiredMessage={t('RequiredMsg')} required maxLength={25} />
      <Input label={t('Surnames')} requiredMessage={t('RequiredMsg')} required maxLength={25} />
      <Input label='RFC' requiredMessage={t('RequiredMsg')} required maxLength={13} />
      <Input label={t('Phone')} requiredMessage={t('RequiredMsg')} type='number' required maxLength={10} />
      <p className='panel-coditions'>{t('AcceptButtonMessage')}
        &nbsp;<span className='links'>{t('TermsAndConditions')}</span>
        &nbsp;{t('andOur')}
        &nbsp;<span className='links'>{t('DataPolicy')}</span>
      </p>
      <Button text={t('Continue')} />
    </Panel>
  )
}