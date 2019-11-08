import React from "react";
import { storiesOf } from "@storybook/react";
import { Populate } from "./populatedatabase";

var stories = storiesOf("Use Axios", module);

stories.addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>);

stories.add("populating", () => <Populate />);
