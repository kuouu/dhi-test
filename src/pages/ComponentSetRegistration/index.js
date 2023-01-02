import React from "react";

import { Column, Row, List, Stack, Line, Text, Button, Img } from "components";

const ComponentSetRegistrationPage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-notosanstc items-center justify-center mx-[auto] p-[125px] sm:p-[15px] md:p-[64px] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end max-w-[1668px] ml-[auto] mr-[auto] my-[15px] sm:my-[5px] md:my-[7px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
            <List
              className="sm:gap-[15px] md:gap-[20px] gap-[40px] grid min-h-[auto] w-[36%]"
              orientation="vertical"
            >
              <Stack className="h-[64px] relative w-[100%]">
                <Stack className="absolute h-[64px] left-[0] sm:w-[100%] w-[71%]">
                  <Line className="absolute bg-blue_600 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[59%]" />
                  <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] pb-[4px] sm:px-[0] px-[4px] sm:w-[100%] w-[71%]">
                    <Text
                      className="bg-blue_600 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                      variant="body1"
                    >
                      1
                    </Text>
                    <Text
                      className="font-bold mt-[12px] sm:mt-[4px] md:mt-[6px] text-indigo_800 w-[auto]"
                      variant="body1"
                    >
                      Label
                    </Text>
                  </Column>
                </Stack>
                <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] pb-[4px] sm:px-[0] px-[4px] right-[0] sm:w-[100%] w-[50%]">
                  <Text
                    className="bg-blue_600 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                    variant="body1"
                  >
                    5
                  </Text>
                  <Text
                    className="font-bold mt-[12px] sm:mt-[4px] md:mt-[6px] text-indigo_800 w-[auto]"
                    variant="body1"
                  >
                    Label
                  </Text>
                </Column>
              </Stack>
              <Stack className="h-[64px] relative w-[100%]">
                <Stack className="absolute h-[64px] left-[0] sm:w-[100%] w-[73%]">
                  <Line className="absolute bg-gray_400 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[60%]" />
                  <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] pb-[4px] sm:px-[0] px-[4px] sm:w-[100%] w-[70%]">
                    <Text
                      className="bg-blue_100 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                      variant="body1"
                    >
                      2
                    </Text>
                    <Text
                      className="font-bold mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_400 w-[auto]"
                      variant="body1"
                    >
                      Label
                    </Text>
                  </Column>
                </Stack>
                <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] pb-[4px] sm:px-[0] px-[4px] right-[0] sm:w-[100%] w-[50%]">
                  <Text
                    className="bg-blue_100 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                    variant="body1"
                  >
                    5
                  </Text>
                  <Text
                    className="font-bold mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_400 w-[auto]"
                    variant="body1"
                  >
                    Label
                  </Text>
                </Column>
              </Stack>
            </List>
            <List
              className="border border-deep_purple_A200 border-solid sm:gap-[19px] md:gap-[24px] gap-[48px] grid min-h-[auto] sm:ml-[21px] md:ml-[27px] ml-[54px] sm:mt-[31px] md:mt-[40px] mt-[78px] md:p-[10px] p-[20px] sm:px-[15px] sm:py-[7px] rounded-radius5 sm:w-[100%] w-[94%]"
              orientation="vertical"
            >
              <Stack className="h-[64px] md:pr-[12px] sm:pr-[15px] pr-[25px] relative w-[100%]">
                <Stack className="absolute h-[64px] sm:w-[100%] w-[89%]">
                  <Stack className="absolute h-[64px] left-[0] sm:w-[100%] w-[78%]">
                    <Stack className="absolute h-[64px] left-[0] sm:w-[100%] w-[71%]">
                      <Stack className="absolute h-[64px] left-[0] sm:pl-[15px] pl-[16px] md:pl-[8px] sm:w-[100%] w-[58%]">
                        <Line className="absolute bg-blue_600 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[59%]" />
                        <Column className="absolute flex flex-col items-center justify-start left-[25%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                          <Text
                            className="bg-blue_600 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                            variant="body1"
                          >
                            1
                          </Text>
                          <Text
                            className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-indigo_800 w-[auto]"
                            variant="body1"
                          >
                            安裝讀卡機元件
                          </Text>
                        </Column>
                      </Stack>
                      <Stack className="absolute h-[64px] sm:pl-[15px] pl-[16px] md:pl-[8px] right-[0] sm:w-[100%] w-[60%]">
                        <Line className="absolute bg-gray_400 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[60%]" />
                        <Column className="absolute flex flex-col items-center justify-start left-[25%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
                          <Text
                            className="bg-blue_100 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                            variant="body1"
                          >
                            2
                          </Text>
                          <Text
                            className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-gray_400 w-[auto]"
                            variant="body1"
                          >
                            健保卡讀取確認
                          </Text>
                        </Column>
                      </Stack>
                    </Stack>
                    <Stack className="absolute h-[64px] md:pl-[12px] sm:pl-[15px] pl-[25px] right-[0] sm:w-[100%] w-[42%]">
                      <Line className="absolute bg-gray_400 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[60%]" />
                      <Column className="absolute flex flex-col items-center justify-start left-[39%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                        <Text
                          className="bg-blue_100 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                          variant="body1"
                        >
                          3
                        </Text>
                        <Text
                          className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-gray_400 w-[auto]"
                          variant="body1"
                        >
                          填寫基本資料
                        </Text>
                      </Column>
                    </Stack>
                  </Stack>
                  <Stack className="absolute h-[64px] md:pl-[12px] sm:pl-[15px] pl-[25px] right-[0] w-[33%]">
                    <Line className="absolute bg-gray_400 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[60%]" />
                    <Column className="absolute flex flex-col items-center justify-start left-[39%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                      <Text
                        className="bg-blue_100 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                        variant="body1"
                      >
                        4
                      </Text>
                      <Text
                        className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-gray_400 w-[auto]"
                        variant="body1"
                      >
                        設定註冊密碼
                      </Text>
                    </Column>
                  </Stack>
                </Stack>
                <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[39%] sm:w-[100%] w-[14%]">
                  <Text
                    className="bg-blue_100 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                    variant="body1"
                  >
                    5
                  </Text>
                  <Text
                    className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-gray_400 w-[auto]"
                    variant="body1"
                  >
                    確認註冊資訊
                  </Text>
                </Column>
              </Stack>
              <Stack className="h-[64px] md:pr-[12px] sm:pr-[15px] pr-[25px] relative w-[100%]">
                <Stack className="absolute h-[64px] sm:w-[100%] w-[89%]">
                  <Stack className="absolute h-[64px] left-[0] sm:w-[100%] w-[78%]">
                    <Stack className="absolute h-[64px] left-[0] sm:w-[100%] w-[71%]">
                      <Stack className="absolute h-[64px] left-[0] sm:pl-[15px] pl-[16px] md:pl-[8px] sm:w-[100%] w-[59%]">
                        <Line className="absolute bg-blue_600 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[59%]" />
                        <Column className="absolute flex flex-col items-center justify-start left-[25%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                          <Text
                            className="bg-blue_600 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                            variant="body1"
                          >
                            1
                          </Text>
                          <Text
                            className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-indigo_800 w-[auto]"
                            variant="body1"
                          >
                            安裝讀卡機元件
                          </Text>
                        </Column>
                      </Stack>
                      <Stack className="absolute h-[64px] sm:pl-[15px] pl-[16px] md:pl-[8px] right-[0] sm:w-[100%] w-[59%]">
                        <Line className="absolute bg-blue_600 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[59%]" />
                        <Column className="absolute flex flex-col items-center justify-start left-[25%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                          <Text
                            className="bg-blue_600 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                            variant="body1"
                          >
                            2
                          </Text>
                          <Text
                            className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-indigo_800 w-[auto]"
                            variant="body1"
                          >
                            健保卡讀取確認
                          </Text>
                        </Column>
                      </Stack>
                    </Stack>
                    <Stack className="absolute h-[64px] md:pl-[12px] sm:pl-[15px] pl-[25px] right-[0] sm:w-[100%] w-[42%]">
                      <Line className="absolute bg-gray_400 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[60%]" />
                      <Column className="absolute flex flex-col items-center justify-start left-[39%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                        <Text
                          className="bg-blue_100 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                          variant="body1"
                        >
                          3
                        </Text>
                        <Text
                          className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-gray_400 w-[auto]"
                          variant="body1"
                        >
                          填寫基本資料
                        </Text>
                      </Column>
                    </Stack>
                  </Stack>
                  <Stack className="absolute h-[64px] md:pl-[12px] sm:pl-[15px] pl-[25px] right-[0] w-[33%]">
                    <Line className="absolute bg-gray_400 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[60%]" />
                    <Column className="absolute flex flex-col items-center justify-start left-[39%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                      <Text
                        className="bg-blue_100 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                        variant="body1"
                      >
                        4
                      </Text>
                      <Text
                        className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-gray_400 w-[auto]"
                        variant="body1"
                      >
                        設定註冊密碼
                      </Text>
                    </Column>
                  </Stack>
                </Stack>
                <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[39%] sm:w-[100%] w-[14%]">
                  <Text
                    className="bg-blue_100 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                    variant="body1"
                  >
                    5
                  </Text>
                  <Text
                    className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-gray_400 w-[auto]"
                    variant="body1"
                  >
                    確認註冊資訊
                  </Text>
                </Column>
              </Stack>
              <Stack className="h-[64px] md:pr-[12px] sm:pr-[15px] pr-[25px] relative w-[100%]">
                <Stack className="absolute h-[64px] sm:w-[100%] w-[89%]">
                  <Stack className="absolute h-[64px] left-[0] sm:w-[100%] w-[77%]">
                    <Stack className="absolute h-[64px] left-[0] sm:w-[100%] w-[71%]">
                      <Stack className="absolute h-[64px] left-[0] sm:pl-[15px] pl-[16px] md:pl-[8px] sm:w-[100%] w-[59%]">
                        <Line className="absolute bg-blue_600 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[59%]" />
                        <Column className="absolute flex flex-col items-center justify-start left-[25%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                          <Text
                            className="bg-blue_600 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                            variant="body1"
                          >
                            1
                          </Text>
                          <Text
                            className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-indigo_800 w-[auto]"
                            variant="body1"
                          >
                            安裝讀卡機元件
                          </Text>
                        </Column>
                      </Stack>
                      <Stack className="absolute h-[64px] sm:pl-[15px] pl-[16px] md:pl-[8px] right-[0] sm:w-[100%] w-[59%]">
                        <Line className="absolute bg-blue_600 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[59%]" />
                        <Column className="absolute flex flex-col items-center justify-start left-[25%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                          <Text
                            className="bg-blue_600 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                            variant="body1"
                          >
                            2
                          </Text>
                          <Text
                            className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-indigo_800 w-[auto]"
                            variant="body1"
                          >
                            健保卡讀取確認
                          </Text>
                        </Column>
                      </Stack>
                    </Stack>
                    <Stack className="absolute h-[64px] md:pl-[12px] sm:pl-[15px] pl-[25px] right-[0] sm:w-[100%] w-[42%]">
                      <Line className="absolute bg-blue_600 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[59%]" />
                      <Column className="absolute flex flex-col items-center justify-start left-[39%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                        <Text
                          className="bg-blue_600 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                          variant="body1"
                        >
                          3
                        </Text>
                        <Text
                          className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-indigo_800 w-[auto]"
                          variant="body1"
                        >
                          填寫基本資料
                        </Text>
                      </Column>
                    </Stack>
                  </Stack>
                  <Stack className="absolute h-[64px] md:pl-[12px] sm:pl-[15px] pl-[25px] right-[0] w-[33%]">
                    <Line className="absolute bg-gray_400 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[60%]" />
                    <Column className="absolute flex flex-col items-center justify-start left-[39%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                      <Text
                        className="bg-blue_100 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                        variant="body1"
                      >
                        4
                      </Text>
                      <Text
                        className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-gray_400 w-[auto]"
                        variant="body1"
                      >
                        設定註冊密碼
                      </Text>
                    </Column>
                  </Stack>
                </Stack>
                <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[39%] sm:w-[100%] w-[14%]">
                  <Text
                    className="bg-blue_100 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                    variant="body1"
                  >
                    5
                  </Text>
                  <Text
                    className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-gray_400 w-[auto]"
                    variant="body1"
                  >
                    確認註冊資訊
                  </Text>
                </Column>
              </Stack>
              <Stack className="h-[64px] md:pr-[12px] sm:pr-[15px] pr-[25px] relative w-[100%]">
                <Stack className="absolute h-[64px] sm:w-[100%] w-[89%]">
                  <Stack className="absolute h-[64px] left-[0] sm:w-[100%] w-[78%]">
                    <Stack className="absolute h-[64px] left-[0] sm:w-[100%] w-[71%]">
                      <Stack className="absolute h-[64px] left-[0] sm:pl-[15px] pl-[16px] md:pl-[8px] sm:w-[100%] w-[59%]">
                        <Line className="absolute bg-blue_600 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[59%]" />
                        <Column className="absolute flex flex-col items-center justify-start left-[25%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                          <Text
                            className="bg-blue_600 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                            variant="body1"
                          >
                            1
                          </Text>
                          <Text
                            className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-indigo_800 w-[auto]"
                            variant="body1"
                          >
                            安裝讀卡機元件
                          </Text>
                        </Column>
                      </Stack>
                      <Stack className="absolute h-[64px] sm:pl-[15px] pl-[16px] md:pl-[8px] right-[0] sm:w-[100%] w-[59%]">
                        <Line className="absolute bg-blue_600 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[59%]" />
                        <Column className="absolute flex flex-col items-center justify-start left-[25%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                          <Text
                            className="bg-blue_600 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                            variant="body1"
                          >
                            2
                          </Text>
                          <Text
                            className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-indigo_800 w-[auto]"
                            variant="body1"
                          >
                            健保卡讀取確認
                          </Text>
                        </Column>
                      </Stack>
                    </Stack>
                    <Stack className="absolute h-[64px] md:pl-[12px] sm:pl-[15px] pl-[25px] right-[0] sm:w-[100%] w-[42%]">
                      <Line className="absolute bg-blue_600 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[59%]" />
                      <Column className="absolute flex flex-col items-center justify-start left-[39%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                        <Text
                          className="bg-blue_600 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                          variant="body1"
                        >
                          3
                        </Text>
                        <Text
                          className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-indigo_800 w-[auto]"
                          variant="body1"
                        >
                          填寫基本資料
                        </Text>
                      </Column>
                    </Stack>
                  </Stack>
                  <Stack className="absolute h-[64px] md:pl-[12px] sm:pl-[15px] pl-[25px] right-[0] w-[32%]">
                    <Line className="absolute bg-blue_600 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[59%]" />
                    <Column className="absolute flex flex-col items-center justify-start left-[39%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                      <Text
                        className="bg-blue_600 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                        variant="body1"
                      >
                        4
                      </Text>
                      <Text
                        className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-indigo_800 w-[auto]"
                        variant="body1"
                      >
                        設定註冊密碼
                      </Text>
                    </Column>
                  </Stack>
                </Stack>
                <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[39%] sm:w-[100%] w-[14%]">
                  <Text
                    className="bg-blue_100 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                    variant="body1"
                  >
                    5
                  </Text>
                  <Text
                    className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-gray_400 w-[auto]"
                    variant="body1"
                  >
                    確認註冊資訊
                  </Text>
                </Column>
              </Stack>
              <Stack className="h-[64px] md:pr-[12px] sm:pr-[15px] pr-[25px] relative w-[100%]">
                <Stack className="absolute h-[64px] sm:w-[100%] w-[89%]">
                  <Stack className="absolute h-[64px] left-[0] sm:w-[100%] w-[78%]">
                    <Stack className="absolute h-[64px] left-[0] sm:w-[100%] w-[71%]">
                      <Stack className="absolute h-[64px] left-[0] sm:pl-[15px] pl-[16px] md:pl-[8px] sm:w-[100%] w-[59%]">
                        <Line className="absolute bg-blue_600 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[59%]" />
                        <Column className="absolute flex flex-col items-center justify-start left-[25%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                          <Text
                            className="bg-blue_600 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                            variant="body1"
                          >
                            1
                          </Text>
                          <Text
                            className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-indigo_800 w-[auto]"
                            variant="body1"
                          >
                            安裝讀卡機元件
                          </Text>
                        </Column>
                      </Stack>
                      <Stack className="absolute h-[64px] sm:pl-[15px] pl-[16px] md:pl-[8px] right-[0] sm:w-[100%] w-[59%]">
                        <Line className="absolute bg-blue_600 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[59%]" />
                        <Column className="absolute flex flex-col items-center justify-start left-[25%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                          <Text
                            className="bg-blue_600 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                            variant="body1"
                          >
                            2
                          </Text>
                          <Text
                            className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-indigo_800 w-[auto]"
                            variant="body1"
                          >
                            健保卡讀取確認
                          </Text>
                        </Column>
                      </Stack>
                    </Stack>
                    <Stack className="absolute h-[64px] md:pl-[12px] sm:pl-[15px] pl-[25px] right-[0] sm:w-[100%] w-[42%]">
                      <Line className="absolute bg-blue_600 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[59%]" />
                      <Column className="absolute flex flex-col items-center justify-start left-[39%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                        <Text
                          className="bg-blue_600 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                          variant="body1"
                        >
                          3
                        </Text>
                        <Text
                          className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-indigo_800 w-[auto]"
                          variant="body1"
                        >
                          填寫基本資料
                        </Text>
                      </Column>
                    </Stack>
                  </Stack>
                  <Stack className="absolute h-[64px] md:pl-[12px] sm:pl-[15px] pl-[25px] right-[0] w-[32%]">
                    <Line className="absolute bg-blue_600 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[59%]" />
                    <Column className="absolute flex flex-col items-center justify-start left-[39%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                      <Text
                        className="bg-blue_600 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                        variant="body1"
                      >
                        4
                      </Text>
                      <Text
                        className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-indigo_800 w-[auto]"
                        variant="body1"
                      >
                        設定註冊密碼
                      </Text>
                    </Column>
                  </Stack>
                </Stack>
                <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[39%] sm:w-[100%] w-[14%]">
                  <Text
                    className="bg-blue_600 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                    variant="body1"
                  >
                    5
                  </Text>
                  <Text
                    className="font-bold mt-[13px] sm:mt-[5px] md:mt-[6px] text-indigo_800 w-[auto]"
                    variant="body1"
                  >
                    確認註冊資訊
                  </Text>
                </Column>
              </Stack>
            </List>
          </Column>
          <Column className="flex flex-col justify-start md:ml-[25px] ml-[49px] mt-[125px] sm:mt-[49px] md:mt-[64px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
            <Column className="border border-deep_purple_A200 border-solid flex flex-col justify-end p-[18px] md:p-[9px] sm:px-[15px] sm:py-[7px] rounded-radius5 w-[100%]">
              <Button
                className="cursor-pointer font-bold min-w-[77%] ml-[2px] mt-[2px] text-[14px] text-center text-white_A700 w-[max-content]"
                variant="FillBlue100"
              >
                檢查安裝元件
              </Button>
              <Button
                className="cursor-pointer font-bold min-w-[77%] ml-[2px] sm:mt-[13px] md:mt-[18px] mt-[35px] text-[14px] text-center text-white_A700 w-[max-content]"
                variant="FillIndigo800"
              >
                檢查安裝元件
              </Button>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between ml-[2px] sm:mt-[13px] md:mt-[18px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                <Button
                  className="cursor-pointer font-bold min-w-[79%] text-[14px] text-center text-white_A700 w-[max-content]"
                  variant="FillIndigo800"
                >
                  檢查安裝元件
                </Button>
                <Img
                  src="images/img_checkmark_22X22.svg"
                  className="md:h-[12px] h-[22px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[22px] sm:w-[8px]"
                  alt="checkmark"
                />
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between ml-[2px] sm:mt-[13px] md:mt-[18px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                <Button
                  className="cursor-pointer font-bold min-w-[79%] text-[14px] text-center text-white_A700 w-[max-content]"
                  variant="FillIndigo800"
                >
                  檢查安裝元件
                </Button>
                <Img
                  src="images/img_close.svg"
                  className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                  alt="close"
                />
              </Row>
              <Button
                className="cursor-pointer font-bold min-w-[78%] ml-[2px] sm:mt-[13px] md:mt-[18px] mt-[35px] text-[14px] text-center text-indigo_800 w-[max-content]"
                variant="FillWhiteA700"
              >
                檢查安裝元件
              </Button>
            </Column>
            <Column className="border border-deep_purple_A200 border-solid flex flex-col items-center justify-start sm:mt-[24px] md:mt-[31px] mt-[61px] sm:mx-[0] md:p-[10px] p-[20px] sm:px-[15px] sm:py-[7px] rounded-radius5 sm:w-[100%] w-[82%]">
              <Button
                className="cursor-pointer font-bold min-w-[100%] text-[14px] text-center text-white_A700 w-[max-content]"
                size="md"
              >
                Button
              </Button>
              <Button
                className="cursor-pointer font-bold min-w-[100%] sm:mt-[14px] md:mt-[18px] mt-[36px] text-[14px] text-center text-white_A700 w-[max-content]"
                size="md"
                variant="FillBlue700"
              >
                Button
              </Button>
              <Button
                className="cursor-pointer font-bold min-w-[100%] sm:mt-[14px] md:mt-[18px] mt-[36px] text-[14px] text-center text-white_A700 w-[max-content]"
                size="md"
                variant="FillBlue100"
              >
                Button
              </Button>
            </Column>
          </Column>
          <Column className="flex flex-col justify-start sm:mb-[23px] md:mb-[30px] mb-[59px] ml-[147px] md:ml-[75px] sm:mt-[108px] md:mt-[139px] mt-[271px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
            <Button
              className="cursor-pointer font-bold min-w-[47%] text-[18px] text-center text-white_A700 w-[max-content]"
              shape="CustomBorderTL20"
              size="lg"
            >
              Linux (Fedora)
            </Button>
            <Button
              className="cursor-pointer font-bold min-w-[47%] ml-[1px] sm:mt-[21px] md:mt-[28px] mt-[55px] text-[18px] text-center text-white_A700 w-[max-content]"
              shape="CustomBorderTL20"
              size="lg"
            >
              Windows
            </Button>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[15px] md:mt-[19px] mt-[38px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
              <Column className="bg-white_A700 flex flex-col items-center mb-[1px] sm:mx-[0] p-[10px] sm:p-[3px] md:p-[5px] rounded-radius8 sm:w-[100%] w-[44%]">
                <Text
                  className="font-medium leading-[18.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-center text-indigo_800 sm:w-[100%] w-[60%]"
                  variant="body3"
                >
                  Windows
                  <br />
                  元件下載
                </Text>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center md:ml-[19px] ml-[38px] sm:mx-[0] p-[10px] sm:p-[3px] md:p-[5px] rounded-radius8 sm:w-[100%] w-[44%]">
                <Text
                  className="font-medium leading-[18.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-center text-indigo_800 sm:w-[100%] w-[83%]"
                  variant="body3"
                >
                  Windows
                  <br />
                  元件安裝手冊
                </Text>
              </Column>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[20px] md:mt-[26px] mt-[51px] w-[100%]">
              <Button
                className="cursor-pointer font-bold min-w-[47%] text-[18px] text-center text-white_A700 w-[max-content]"
                shape="CustomBorderTL20"
                size="lg"
              >
                Mac
              </Button>
              <Button
                className="cursor-pointer font-bold min-w-[47%] text-[18px] text-center text-white_A700 w-[max-content]"
                shape="CustomBorderTL20"
                size="lg"
              >
                Linux (Ubuntu)
              </Button>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mt-[20px] md:mt-[26px] mt-[51px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
              <Column className="bg-white_A700 flex flex-col items-center mb-[1px] sm:mx-[0] p-[10px] sm:p-[3px] md:p-[5px] rounded-radius8 sm:w-[100%] w-[44%]">
                <Text
                  className="font-medium leading-[18.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-center text-indigo_800 sm:w-[100%] w-[55%]"
                  variant="body3"
                >
                  Mac
                  <br />
                  元件下載
                </Text>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center md:ml-[19px] ml-[38px] sm:mx-[0] p-[10px] sm:p-[3px] md:p-[5px] rounded-radius8 sm:w-[100%] w-[44%]">
                <Text
                  className="font-medium leading-[18.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-center text-indigo_800 sm:w-[100%] w-[83%]"
                  variant="body3"
                >
                  Mac
                  <br />
                  元件安裝手冊
                </Text>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ComponentSetRegistrationPage;
