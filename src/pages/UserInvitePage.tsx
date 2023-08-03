import { InvitationFormNotAvailable } from '../components/invitation-form-not-available/invitationFormNotAvailable';
import { InvitationForm } from '../components/Invitation-form/invitationForm';
import { validateInvitation } from '../services/userCatalogservice';
import { useEffect, useState } from 'react';
//import queryString from 'query-string';

export function UserInvitePage() {
  const [guid, setGuid] = useState<string | null>(null);
  const [isValidInvitation, setIsValidInvitation] = useState<boolean | null>(null);

  useEffect(() => {
    //const search = window.location.search;
    //const parsed = queryString.parse(search);
    const token = 'parsed.token';
    if (typeof token === 'string') {
      setGuid(token);
      validateUserInvitation(token);
    }
  }, []);

  const validateUserInvitation = async (guid: string) => {
    try {
      const isValid = await validateInvitation(guid);
      setIsValidInvitation(isValid);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {guid && isValidInvitation ? <InvitationForm /> : <InvitationFormNotAvailable />}
    </>
  )
}