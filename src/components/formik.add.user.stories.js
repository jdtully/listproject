import React from "react";
import { storiesOf } from "@storybook/react";
import { AddUserForm } from "./formik.add.user";

var stories = storiesOf("Use Formik", module);

stories.addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>);

stories.add("using formik ", () => <AddUserForm />);
