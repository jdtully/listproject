import React from "react";
import { storiesOf } from "@storybook/react";
import { AxiosList } from "./list.axios.data";
import { array } from "./testarray";
import { PaginatedList } from "./axios.list.controller";
import { AddPersonAxios } from "./addAxiosRecord";
import { EditUser } from "./editUser";

var stories = storiesOf("Use Axios", module);

stories.addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>);

stories.add("people in local array", () => <AxiosList data={array} />);
stories.add("paginated people", () => <PaginatedList />);
stories.add("adding people", () => <AddPersonAxios />);
stories.add("edit People", () => <EditUser />);
//stories.add("formik entry form", () => <EntryForm />);
