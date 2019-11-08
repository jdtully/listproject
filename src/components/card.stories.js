import React from "react";
import { storiesOf } from "@storybook/react";
import { array } from "./testarray";

import { Cardmaker } from "./card";

var stories = storiesOf("Make a Card", module);

stories.addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>);

stories.add("cardproj", () => <Cardmaker data={array} />);
