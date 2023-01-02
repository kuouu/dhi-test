import React from "react";

import { Column, Row, Img, Text, Stack, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const One6Page = () => {
  const navigate = useNavigate();

  function handleNavigate83() {
    navigate("/page4");
  }
  function handleNavigate84() {
    navigate("/two4");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-notosanstc items-end justify-end mx-[auto] sm:p-[15px] md:p-[31px] p-[37px] w-[100%]">
        <Column className="flex flex-col justify-start max-w-[1011px] ml-[auto] sm:mr-[5px] md:mr-[6px] mr-[auto] mt-[2px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
            <Img
              src="images/img_websiteicon.png"
              className="sm:h-[43px] md:h-[56px] h-[64px] rounded-radius50 sm:w-[42px] md:w-[55px] w-[64px]"
              alt="WebsiteIcon"
            />
            <Column className="flex flex-col items-center md:ml-[6px] ml-[8px] sm:mx-[0] md:p-[6px] p-[8px] sm:px-[0] sm:py-[5px] sm:w-[100%] w-[83%]">
              <Text
                className="mt-[10px] sm:mt-[6px] md:mt-[8px] text-light_blue_900 w-[auto]"
                as="h3"
                variant="h3"
              >
                健保卡網路服務註冊
              </Text>
            </Column>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mt-[39px] md:mt-[51px] mt-[60px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
            <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
              <Text className="text-indigo_800 w-[auto]" as="h4" variant="h4">
                註冊健保卡網路服務系統
              </Text>
              <Column className="flex flex-col items-center justify-start sm:mt-[26px] md:mt-[34px] mt-[40px] w-[100%]">
                <Stack className="h-[64px] sm:pr-[15px] md:pr-[21px] pr-[25px] relative w-[100%]">
                  <Stack className="absolute h-[64px] sm:w-[100%] w-[89%]">
                    <Stack className="absolute h-[64px] left-[0] sm:w-[100%] w-[78%]">
                      <Stack className="absolute h-[64px] left-[0] sm:w-[100%] w-[71%]">
                        <Stack className="absolute h-[64px] left-[0] md:pl-[13px] sm:pl-[15px] pl-[16px] sm:w-[100%] w-[59%]">
                          <Line className="absolute bg-blue_600 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[59%]" />
                          <Column className="absolute flex flex-col items-center justify-start left-[25%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                            <Text
                              className="bg-blue_600 flex font-bold items-center sm:px-[5px] md:px-[7px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                              variant="body1"
                            >
                              1
                            </Text>
                            <Text
                              className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-indigo_800 w-[auto]"
                              variant="body1"
                            >
                              安裝讀卡機元件
                            </Text>
                          </Column>
                        </Stack>
                        <Stack className="absolute h-[64px] md:pl-[13px] sm:pl-[15px] pl-[16px] right-[0] sm:w-[100%] w-[59%]">
                          <Line className="absolute bg-blue_600 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[59%]" />
                          <Column className="absolute flex flex-col items-center justify-start left-[25%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                            <Text
                              className="bg-blue_600 flex font-bold items-center sm:px-[5px] md:px-[7px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                              variant="body1"
                            >
                              2
                            </Text>
                            <Text
                              className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-indigo_800 w-[auto]"
                              variant="body1"
                            >
                              健保卡讀取確認
                            </Text>
                          </Column>
                        </Stack>
                      </Stack>
                      <Stack className="absolute h-[64px] sm:pl-[15px] md:pl-[21px] pl-[25px] right-[0] sm:w-[100%] w-[42%]">
                        <Line className="absolute bg-blue_600 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[59%]" />
                        <Column className="absolute flex flex-col items-center justify-start left-[39%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                          <Text
                            className="bg-blue_600 flex font-bold items-center sm:px-[5px] md:px-[7px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                            variant="body1"
                          >
                            3
                          </Text>
                          <Text
                            className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-indigo_800 w-[auto]"
                            variant="body1"
                          >
                            填寫基本資料
                          </Text>
                        </Column>
                      </Stack>
                    </Stack>
                    <Stack className="absolute h-[64px] sm:pl-[15px] md:pl-[21px] pl-[25px] right-[0] w-[32%]">
                      <Line className="absolute bg-blue_600 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[59%]" />
                      <Column className="absolute flex flex-col items-center justify-start left-[39%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                        <Text
                          className="bg-blue_600 flex font-bold items-center sm:px-[5px] md:px-[7px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                          variant="body1"
                        >
                          4
                        </Text>
                        <Text
                          className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-indigo_800 w-[auto]"
                          variant="body1"
                        >
                          設定註冊密碼
                        </Text>
                      </Column>
                    </Stack>
                  </Stack>
                  <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[39%] sm:w-[100%] w-[14%]">
                    <Text
                      className="bg-blue_600 flex font-bold items-center sm:px-[5px] md:px-[7px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                      variant="body1"
                    >
                      5
                    </Text>
                    <Text
                      className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-indigo_800 w-[auto]"
                      variant="body1"
                    >
                      確認註冊資訊
                    </Text>
                  </Column>
                </Stack>
                <Column className="bg-blue_50 flex flex-col items-end justify-start sm:mt-[26px] md:mt-[34px] mt-[40px] sm:p-[15px] md:p-[31px] p-[37px] rounded-radius8 w-[100%]">
                  <Column className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[5px] mr-[105px] md:mr-[90px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                    <Text
                      className="text-black_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      確認註冊資訊
                    </Text>
                    <Column className="flex flex-col justify-end sm:mt-[26px] md:mt-[34px] mt-[40px] sm:pt-[3px] md:pt-[4px] pt-[5px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mr-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          variant="body1"
                        >
                          姓名
                        </Text>
                        <Text
                          className="font-bold sm:ml-[64px] md:ml-[83px] ml-[97px] text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          陳小美
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mr-[auto] sm:mt-[24px] md:mt-[31px] mt-[37px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          variant="body1"
                        >
                          戶號
                        </Text>
                        <Text
                          className="font-bold sm:ml-[63px] md:ml-[82px] ml-[96px] text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          A0123456
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mr-[auto] sm:mt-[24px] md:mt-[31px] mt-[37px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          variant="body1"
                        >
                          戶籍地址
                        </Text>
                        <Text
                          className="font-bold sm:ml-[39px] md:ml-[51px] ml-[60px] text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          新北市板橋區黃石里1鄰
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mr-[auto] sm:mt-[21px] md:mt-[27px] mt-[32px] sm:mx-[0] pt-[4px] sm:px-[0] sm:w-[100%] w-[55%]">
                        <Column className="flex flex-col items-center justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
                          <Text
                            className="font-bold text-black_900 w-[auto]"
                            variant="body1"
                          >
                            行動電話
                          </Text>
                        </Column>
                        <Text
                          className="font-bold sm:ml-[39px] md:ml-[51px] ml-[60px] text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          09 – 34567890
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mr-[auto] sm:mt-[21px] md:mt-[27px] mt-[32px] sm:mx-[0] sm:pt-[3px] md:pt-[4px] pt-[5px] sm:px-[0] sm:w-[100%] w-[55%]">
                        <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
                          <Text
                            className="font-bold text-black_900 w-[auto]"
                            variant="body1"
                          >
                            聯絡電話
                          </Text>
                        </Column>
                        <Text
                          className="font-bold sm:ml-[39px] md:ml-[51px] ml-[60px] mt-[1px] text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          02 – 87654321
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[21px] md:mt-[27px] mt-[32px] sm:pr-[3px] md:pr-[4px] pr-[5px] sm:pt-[3px] md:pt-[4px] pt-[5px] w-[100%]">
                        <Column className="flex flex-col items-center justify-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                          <Text
                            className="font-bold text-black_900 w-[auto]"
                            variant="body1"
                          >
                            Email
                          </Text>
                        </Column>
                        <Text
                          className="font-bold sm:ml-[53px] md:ml-[69px] ml-[81px] mt-[1px] text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          ming0123@xxxx.xxx
                        </Text>
                      </Row>
                      <Column className="flex flex-col justify-end sm:mt-[21px] md:mt-[27px] mt-[32px] sm:pr-[3px] md:pr-[4px] pr-[5px] sm:pt-[3px] md:pt-[4px] pt-[5px] w-[100%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          variant="body1"
                        >
                          備用 Email
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[26px] md:mt-[34px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                  <Button
                    className="common-pointer cursor-pointer font-bold min-w-[44%] text-[14px] text-center text-white_A700 w-[max-content]"
                    onClick={handleNavigate83}
                  >
                    修改
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer font-bold min-w-[44%] sm:ml-[26px] md:ml-[34px] ml-[40px] text-[14px] text-center text-white_A700 w-[max-content]"
                    onClick={handleNavigate84}
                  >
                    確認
                  </Button>
                </Row>
              </Column>
            </Column>
            <Img
              src="images/img_question.svg"
              className="sm:h-[24px] md:h-[31px] h-[35px] max-w-[100%] sm:ml-[65px] md:ml-[84px] ml-[98px] sm:mt-[500px] md:mt-[646px] mt-[752px] sm:w-[23px] md:w-[30px] w-[35px]"
              alt="question"
            />
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default One6Page;
