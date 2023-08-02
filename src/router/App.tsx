import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserInvitePage } from '../pages/UserInvitePage';
import { initReactI18next } from "react-i18next";
import enTranslation from "../assets/i18n/en.json";
import esTranslation from "../assets/i18n/es.json";
import i18n from "i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation }
    },
    lng: "es",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    }
  });

function App() {

  return (
    <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={UserInvitePage} exact />
          </Switch>
        </div>
      </BrowserRouter>
  )
}

export default App
