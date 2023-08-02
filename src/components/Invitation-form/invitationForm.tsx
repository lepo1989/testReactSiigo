import { SiigoButtonDropdownAtom as Dropdown } from '@siigo/siigo-button-dropdown-atom-react';
import { SiigoButtonAtom as Button } from '@siigo/siigo-button-atom-react';
import { SiigoInputAtom as Input } from '@siigo/siigo-input-atom-react';
import { Panel } from '../shared-components/panel/panel';
import { useTranslation } from 'react-i18next';
import "./invitationForm.scss";

export function InvitationForm() {
  const { t } = useTranslation();

  return (
    <Panel width="30%" position="left">
      <h1>{t('UserActivation')}</h1>
      <p>{t('MessageRequiredData')}</p>
      <Input />
      <Input />
      <Input />
      <Input />
      <Dropdown />
      <p>{t('AcceptButtonMessage')}</p>
      <Button text={t('Continue')}/>
    </Panel>
  )
}