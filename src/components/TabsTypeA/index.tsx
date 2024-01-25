import {
  TabsTypeA,
  TabsDataProps,
  DummyComponent1,
  DummyComponent3,
} from "canary-design";

const tabsData: TabsDataProps[] = [
  {
    key: "1",
    label: "Tab 1",
    children: <DummyComponent1 />,
  },
  {
    key: "2",
    label: "Tab 2",
    children: "Tab2 content is shown here.",
  },
  {
    key: "3",
    label: "Tab 3",
    children: <DummyComponent3 />,
  },
];

const ExampleTabsTypeA = () => {
  const tabHandler = (index: number) => {
    console.log(`active tab index: ${index}`);
  };

  return (
    <TabsTypeA
      tabsData={tabsData}
      tabHandler={tabHandler}
      defaultActiveKey={1}
    />
  );
};

export { ExampleTabsTypeA };
