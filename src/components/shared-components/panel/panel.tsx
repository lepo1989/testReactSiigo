import { PanelProps } from '../../../models/Panel.props';
import siigoLogo from '../../../assets/Logo.svg';
import { useTranslation } from 'react-i18next';
import "./panel.scss";

export function Panel({ children, position, width }: PanelProps) {
    const { t } = useTranslation();

    return (
        <div className={`panel-container ${position}`} style={{ width }}>
            <img src={siigoLogo} alt={t('SiigoLogo')} style={{ 'marginBottom': '30px' }} />
            {children}
        </div>
    )
}