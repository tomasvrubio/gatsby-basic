import React from "react"
import { Link } from "gatsby"
import { AtlassianNavigation, PrimaryButton, PrimaryDropdownButton, ProductHome, Settings} from "@atlaskit/atlassian-navigation";
import { ButtonItem, HeadingItem, MenuGroup, Section } from '@atlaskit/menu';
import { AtlassianLogo, AtlassianIcon } from '@atlaskit/logo';

import "@atlaskit/css-reset";

//TODO: Aquí tendré que usar otro componente cuando quiera poner mi icono: CustomProductHome
const Home = () => (
  <ProductHome
    href="#"
    siteTitle="Hello"
    icon={AtlassianIcon}
    logo={AtlassianLogo}
  />
);

const DefaultSettings = () => <Settings tooltip="Product settings" />;


export default () => (
  <div>
    <AtlassianNavigation
      renderProductHome={Home}
      renderSettings={DefaultSettings}
      primaryItems={[
        <PrimaryButton>Página 1</PrimaryButton>,
        <PrimaryButton>Página 2</PrimaryButton>,
        <PrimaryButton>Página 3</PrimaryButton>,
        <PrimaryButton>Página 4</PrimaryButton>,
        // <PrimaryDropdownButton content={AppsContent}>Services</PrimaryDropdownButton>,
      ]}
    />  
    <p>Hello Gatsby!</p>
    <p>{process.env.GATSBY_FUNC_PATH}</p>
    <Link to="/account">Go to your account</Link>
    {/* <a href="/.netlify/functions/hello">Trigger Function here</a> */}
    <a href={process.env.GATSBY_FUNC_PATH + "/hello"}>Trigger hello Function here</a>
  </div>
)