import { nanoid } from "nanoid";

export const landings = [
    {
        id: nanoid(),
        title: "Landing 01",
        route: "/project-management",
    },
    {
        id: nanoid(),
        title: "Landing 02",
        route: "/crm-landing",
    },
    {
        id: nanoid(),
        title: "Landing 03",
        route: "/ai-content-landing",
    },
    {
        id: nanoid(),
        title: "Landing 04",
        route: "/new-intro-landing",
    },
    {
        id: nanoid(),
        title: "Landing 05",
        route: "/about-us-landing",
    },
    {
        id: nanoid(),
        title: "Landing 06",
        route: "/contact-us-landing",
    },
    {
        id: nanoid(),
        title: "Landing 07",
        route: "/faqs-landing",
    },
    {
        id: nanoid(),
        title: "Landing 08",
        route: "/pricing-landing",
    },
    {
        id: nanoid(),
        title: "Landing 09",
        route: "/career-landing",
    },
];

export const country = [
    {
        id: nanoid(),
        title: "Kenya",
    },
    {
        id: nanoid(),
        title: "Tanzania",
    },
    {
        id: nanoid(),
        title: "Uganda",
    },
    {
        id: nanoid(),
        title: "Rwanda",
    },
    {
        id: nanoid(),
        title: "Burundi",
    },
    {
        id: nanoid(),
        title: "Ethopia",
    },
    {
        id: nanoid(),
        title: "Eritrea",
    },
    {
        id: nanoid(),
        title: "Djibouti",
    },
    {
        id: nanoid(),
        title: "Somalia",
    },
    {
        id: nanoid(),
        title: "South Sudan",
    },
];


export interface Phone {
    name: string;
    code: string;
    dial_code: string;
}

export const phone: Phone[] = [
    { name: 'Afghanistan', code: 'AF', dial_code: '+93' },
    { name: 'Albania', code: 'AL', dial_code: '+355' },
    { name: 'Algeria', code: 'DZ', dial_code: '+213' },
    { name: 'American Samoa', code: 'AS', dial_code: '+1 684' },
    { name: 'Andorra', code: 'AD', dial_code: '+376' },
    { name: 'Angola', code: 'AO', dial_code: '+244' },
    { name: 'Anguilla', code: 'AI', dial_code: '+1 264' },
    { name: 'Antarctica', code: 'AQ', dial_code: '+672' },
    { name: 'Antigua and Barbuda', code: 'AG', dial_code: '+1 268' },
    { name: 'Argentina', code: 'AR', dial_code: '+54' },
    { name: 'Armenia', code: 'AM', dial_code: '+374' },
    { name: 'Aruba', code: 'AW', dial_code: '+297' },
    { name: 'Australia', code: 'AU', dial_code: '+61' },
    { name: 'Austria', code: 'AT', dial_code: '+43' },
    { name: 'Azerbaijan', code: 'AZ', dial_code: '+994' },
    { name: 'Bahamas', code: 'BS', dial_code: '+1 242' },
    { name: 'Bahrain', code: 'BH', dial_code: '+973' },
    { name: 'Bangladesh', code: 'BD', dial_code: '+880' },
    { name: 'Barbados', code: 'BB', dial_code: '+1 246' },
    { name: 'Belarus', code: 'BY', dial_code: '+375' },
    { name: 'Belgium', code: 'BE', dial_code: '+32' },
    { name: 'Belize', code: 'BZ', dial_code: '+501' },
    { name: 'Benin', code: 'BJ', dial_code: '+229' },
    { name: 'Bermuda', code: 'BM', dial_code: '+1 441' },
    { name: 'Bhutan', code: 'BT', dial_code: '+975' },
    { name: 'Bolivia', code: 'BO', dial_code: '+591' },
    { name: 'Bosnia and Herzegovina', code: 'BA', dial_code: '+387' },
    { name: 'Botswana', code: 'BW', dial_code: '+267' },
    { name: 'Brazil', code: 'BR', dial_code: '+55' },
    { name: 'British Indian Ocean Territory', code: 'IO', dial_code: '+246' },
    { name: 'British Virgin Islands', code: 'VG', dial_code: '+1 284' },
    { name: 'Brunei', code: 'BN', dial_code: '+673' },
    { name: 'Bulgaria', code: 'BG', dial_code: '+359' },
    { name: 'Burkina Faso', code: 'BF', dial_code: '+226' },
    { name: 'Burundi', code: 'BI', dial_code: '+257' },
    { name: 'Cambodia', code: 'KH', dial_code: '+855' },
    { name: 'Cameroon', code: 'CM', dial_code: '+237' },
    { name: 'Canada', code: 'CA', dial_code: '+1' },
    { name: 'Cape Verde', code: 'CV', dial_code: '+238' },
    { name: 'Cayman Islands', code: 'KY', dial_code: '+1 345' },
    { name: 'Central African Republic', code: 'CF', dial_code: '+236' },
    { name: 'Chad', code: 'TD', dial_code: '+235' },
    { name: 'Chile', code: 'CL', dial_code: '+56' },
    { name: 'China', code: 'CN', dial_code: '+86' },
    { name: 'Christmas Island', code: 'CX', dial_code: '+61' },
    { name: 'Cocos (Keeling) Islands', code: 'CC', dial_code: '+61' },
    { name: 'Colombia', code: 'CO', dial_code: '+57' },
    { name: 'Comoros', code: 'KM', dial_code: '+269' },
    { name: 'Congo', code: 'CG', dial_code: '+242' },
    { name: 'Cook Islands', code: 'CK', dial_code: '+682' },
    { name: 'Costa Rica', code: 'CR', dial_code: '+506' },
    { name: 'Cote d\'Ivoire', code: 'CI', dial_code: '+225' },
    { name: 'Croatia', code: 'HR', dial_code: '+385' },
    { name: 'Cuba', code: 'CU', dial_code: '+53' },
    { name: 'Curacao', code: 'CW', dial_code: '+599' },
    { name: 'Cyprus', code: 'CY', dial_code: '+357' },
    { name: 'Czech Republic', code: 'CZ', dial_code: '+420' },
    { name: 'Democratic Republic of the Congo', code: 'CD', dial_code: '+243' },
    { name: 'Denmark', code: 'DK', dial_code: '+45' },
    { name: 'Djibouti', code: 'DJ', dial_code: '+253' },
    { name: 'Dominica', code: 'DM', dial_code: '+1 767' },
    { name: 'Dominican Republic', code: 'DO', dial_code: '+1 809' },
    { name: 'Ecuador', code: 'EC', dial_code: '+593' },
    { name: 'Egypt', code: 'EG', dial_code: '+20' },
    { name: 'El Salvador', code: 'SV', dial_code: '+503' },
    { name: 'Equatorial Guinea', code: 'GQ', dial_code: '+240' },
    { name: 'Eritrea', code: 'ER', dial_code: '+291' },
    { name: 'Estonia', code: 'EE', dial_code: '+372' },
    { name: 'Eswatini', code: 'SZ', dial_code: '+268' },
    { name: 'Ethiopia', code: 'ET', dial_code: '+251' },
    { name: 'Falkland Islands', code: 'FK', dial_code: '+500' },
    { name: 'Faroe Islands', code: 'FO', dial_code: '+298' },
    { name: 'Fiji', code: 'FJ', dial_code: '+679' },
    { name: 'Finland', code: 'FI', dial_code: '+358' },
    { name: 'France', code: 'FR', dial_code: '+33' },
    { name: 'French Guiana', code: 'GF', dial_code: '+594' },
    { name: 'French Polynesia', code: 'PF', dial_code: '+689' },
    { name: 'Gabon', code: 'GA', dial_code: '+241' },
    { name: 'Gambia', code: 'GM', dial_code: '+220' },
    { name: 'Georgia', code: 'GE', dial_code: '+995' },
    { name: 'Germany', code: 'DE', dial_code: '+49' },
    { name: 'Ghana', code: 'GH', dial_code: '+233' },
    { name: 'Gibraltar', code: 'GI', dial_code: '+350' },
    { name: 'Greece', code: 'GR', dial_code: '+30' },
    { name: 'Greenland', code: 'GL', dial_code: '+299' },
    { name: 'Grenada', code: 'GD', dial_code: '+1 473' },
    { name: 'Guadeloupe', code: 'GP', dial_code: '+590' },
    { name: 'Guam', code: 'GU', dial_code: '+1 671' },
    { name: 'Guatemala', code: 'GT', dial_code: '+502' },
    { name: 'Guinea', code: 'GN', dial_code: '+224' },
    { name: 'Guinea-Bissau', code: 'GW', dial_code: '+245' },
    { name: 'Guyana', code: 'GY', dial_code: '+592' },
    { name: 'Haiti', code: 'HT', dial_code: '+509' },
    { name: 'Vatican City', code: 'VA', dial_code: '+379' },
    { name: 'Honduras', code: 'HN', dial_code: '+504' },
    { name: 'Hong Kong', code: 'HK', dial_code: '+852' },
    { name: 'Hungary', code: 'HU', dial_code: '+36' },
    { name: 'Iceland', code: 'IS', dial_code: '+354' },
    { name: 'India', code: 'IN', dial_code: '+91' },
    { name: 'Indonesia', code: 'ID', dial_code: '+62' },
    { name: 'Iran', code: 'IR', dial_code: '+98' },
    { name: 'Iraq', code: 'IQ', dial_code: '+964' },
    { name: 'Ireland', code: 'IE', dial_code: '+353' },
    { name: 'Isle of Man', code: 'IM', dial_code: '+44' },
    { name: 'Israel', code: 'IL', dial_code: '+972' },
    { name: 'Italy', code: 'IT', dial_code: '+39' },
    { name: 'Jamaica', code: 'JM', dial_code: '+1 876' },
    { name: 'Japan', code: 'JP', dial_code: '+81' },
    { name: 'Jordan', code: 'JO', dial_code: '+962' },
    { name: 'Kazakhstan', code: 'KZ', dial_code: '+7' },
    { name: 'Kenya', code: 'KE', dial_code: '+254' },
    { name: 'Kiribati', code: 'KI', dial_code: '+686' },
    { name: 'North Korea', code: 'KP', dial_code: '+850' },
    { name: 'South Korea', code: 'KR', dial_code: '+82' },
    { name: 'Kuwait', code: 'KW', dial_code: '+965' },
    { name: 'Kyrgyzstan', code: 'KG', dial_code: '+996' },
    { name: 'Laos', code: 'LA', dial_code: '+856' },
    { name: 'Latvia', code: 'LV', dial_code: '+371' },
    { name: 'Lebanon', code: 'LB', dial_code: '+961' },
    { name: 'Lesotho', code: 'LS', dial_code: '+266' },
    { name: 'Liberia', code: 'LR', dial_code: '+231' },
    { name: 'Libya', code: 'LY', dial_code: '+218' },
    { name: 'Liechtenstein', code: 'LI', dial_code: '+423' },
    { name: 'Lithuania', code: 'LT', dial_code: '+370' },
    { name: 'Luxembourg', code: 'LU', dial_code: '+352' },
    { name: 'Macau', code: 'MO', dial_code: '+853' },
    { name: 'Madagascar', code: 'MG', dial_code: '+261' },
    { name: 'Malawi', code: 'MW', dial_code: '+265' },
    { name: 'Malaysia', code: 'MY', dial_code: '+60' },
    { name: 'Maldives', code: 'MV', dial_code: '+960' },
    { name: 'Mali', code: 'ML', dial_code: '+223' },
    { name: 'Malta', code: 'MT', dial_code: '+356' },
    { name: 'Marshall Islands', code: 'MH', dial_code: '+692' },
    { name: 'Martinique', code: 'MQ', dial_code: '+596' },
    { name: 'Mauritania', code: 'MR', dial_code: '+222' }
]