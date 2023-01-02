import React from "react";

import { Column, Row, Img, Text, Stack, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const Three3Page = () => {
  const navigate = useNavigate();

  function handleNavigate60() {
    navigate("/page3");
  }
  function handleNavigate66() {
    navigate("/macone1");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-notosanstc items-end justify-start mx-[auto] sm:p-[15px] md:p-[33px] p-[39px] w-[100%]">
        <Column className="flex flex-col justify-start max-w-[1011px] sm:mb-[3px] md:mb-[5px] mb-[6px] ml-[auto] sm:mr-[3px] md:mr-[5px] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
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
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-end ml-[auto] sm:mt-[39px] md:mt-[51px] mt-[60px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
            <Column className="flex flex-col items-center justify-start mb-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
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
                        <Line className="absolute bg-gray_400 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[60%]" />
                        <Column className="absolute flex flex-col items-center justify-start left-[39%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                          <Text
                            className="bg-blue_100 flex font-bold items-center sm:px-[5px] md:px-[7px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                            variant="body1"
                          >
                            3
                          </Text>
                          <Text
                            className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-gray_400 w-[auto]"
                            variant="body1"
                          >
                            填寫基本資料
                          </Text>
                        </Column>
                      </Stack>
                    </Stack>
                    <Stack className="absolute h-[64px] sm:pl-[15px] md:pl-[21px] pl-[25px] right-[0] w-[33%]">
                      <Line className="absolute bg-gray_400 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[60%]" />
                      <Column className="absolute flex flex-col items-center justify-start left-[39%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                        <Text
                          className="bg-blue_100 flex font-bold items-center sm:px-[5px] md:px-[7px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                          variant="body1"
                        >
                          4
                        </Text>
                        <Text
                          className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-gray_400 w-[auto]"
                          variant="body1"
                        >
                          設定註冊密碼
                        </Text>
                      </Column>
                    </Stack>
                  </Stack>
                  <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[39%] sm:w-[100%] w-[14%]">
                    <Text
                      className="bg-blue_100 flex font-bold items-center sm:px-[5px] md:px-[7px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                      variant="body1"
                    >
                      5
                    </Text>
                    <Text
                      className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-gray_400 w-[auto]"
                      variant="body1"
                    >
                      確認註冊資訊
                    </Text>
                  </Column>
                </Stack>
                <Column className="flex flex-col justify-start sm:mt-[26px] md:mt-[34px] mt-[40px] w-[100%]">
                  <Column className="bg-blue_50 flex flex-col items-center justify-start sm:p-[15px] md:p-[34px] p-[40px] rounded-radius8 w-[100%]">
                    <Column className="flex flex-col justify-start sm:mb-[12px] md:mb-[16px] mb-[19px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                      <Text
                        className="text-black_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        健保卡讀取確認
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-notosanssc items-center justify-between sm:mt-[26px] md:mt-[34px] mt-[40px] w-[100%]">
                        <Stack className="bg-light_blue_100 h-[192px] md:p-[10px] p-[12px] sm:p-[7px] relative rounded-radius8 sm:w-[100%] w-[59%]">
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] px-[1px] sm:w-[109px] md:w-[141px] w-[164px]"
                            style={{
                              backgroundImage: "url('images/img_group11.svg')",
                            }}
                          >
                            <Column className="flex flex-col justify-start sm:mb-[15px] md:mb-[20px] mb-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                              <Column className="flex flex-col items-center justify-start w-[100%]">
                                <Text
                                  className="font-bold text-teal_400 sm:tracking-ls4 md:tracking-ls6 tracking-ls72 w-[auto]"
                                  variant="body2"
                                >
                                  全民健康保險
                                </Text>
                                <Text
                                  className="mt-[2px] text-teal_400 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  NATIONAL HEALTH INSURANCE
                                </Text>
                              </Column>
                              <Column className="flex flex-col justify-start md:ml-[17px] ml-[20px] sm:mt-[25px] md:mt-[33px] mt-[39px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                                <Text
                                  className="font-bold ml-[1px] text-black_900 md:tracking-ls2 sm:tracking-ls2 tracking-ls32 w-[auto]"
                                  variant="body2"
                                >
                                  陳小美
                                </Text>
                                <Text
                                  className="md:mt-[10px] mt-[12px] sm:mt-[7px] text-black_900 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                  variant="body5"
                                >
                                  A123456789
                                </Text>
                                <Text
                                  className="ml-[1px] mt-[2px] text-black_900 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                  variant="body5"
                                >
                                  99 / 11 / 22
                                </Text>
                              </Column>
                            </Column>
                          </Column>
                          <Text
                            className="absolute bottom-[7%] left-[5%] text-black_900 tracking-ls064 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            0000 0000 0000
                          </Text>
                          <Row className="absolute bottom-[11%] flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-start sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[90%]">
                            <Img
                              src="images/img_arrowleft.svg"
                              className="max-w-[100%] sm:mt-[5px] md:mt-[6px] mt-[8px] w-[5%]"
                              alt="arrowleft"
                            />
                            <Img
                              src="images/img_videocamera_6.svg"
                              className="max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[5px] mt-[4px] w-[18%]"
                              alt="videocamera"
                            />
                            <Img
                              src="images/img_frame2.svg"
                              className="max-w-[100%] md:ml-[104px] ml-[121px] sm:ml-[80px] rounded-radius6 w-[33%]"
                              alt="FrameTwo"
                            />
                          </Row>
                          <Stack className="absolute h-[42px] left-[10%] top-[0] sm:w-[27px] md:w-[36px] w-[42px]">
                            <div className="absolute bg-white_A700 sm:h-[22px] md:h-[29px] h-[33px] inset-x-[0] mx-[auto] rounded-radius50 top-[5%] sm:w-[21px] md:w-[28px] w-[33px]"></div>
                            <Img
                              src="images/img_websiteicon.png"
                              className="absolute sm:h-[28px] md:h-[37px] h-[42px] rounded-radius50 w-[100%]"
                              alt="WebsiteIcon One"
                            />
                          </Stack>
                        </Stack>
                        <Column className="flex flex-col font-notosanstc items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                          <Column className="flex flex-col items-center justify-start w-[100%]">
                            <Button
                              className="cursor-pointer font-bold text-[14px] text-center text-white_A700 w-[100%]"
                              variant="FillIndigo800"
                            >
                              檢測元件安裝設定
                            </Button>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[13px] md:mt-[17px] mt-[20px] w-[100%]">
                              <Column className="bg-indigo_800 flex flex-col items-center sm:p-[5px] md:p-[7px] p-[9px] rounded-radius8 w-[100%]">
                                <Text
                                  className="font-bold text-white_A700 w-[auto]"
                                  variant="body3"
                                >
                                  讀取健保卡
                                </Text>
                              </Column>
                              <Img
                                src="images/img_vector_light_green_A700.svg"
                                className="max-w-[100%] w-[1%]"
                                alt="Vector"
                              />
                            </Row>
                          </Column>
                          <a
                            href={"javascript:"}
                            className="font-medium sm:mt-[13px] md:mt-[17px] mt-[20px] text-[14px] text-bluegray_900 underline w-[auto]"
                            rel="noreferrer"
                          >
                            發生錯誤？
                          </a>
                        </Column>
                      </Row>
                    </Column>
                  </Column>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                    <Img
                      src="images/img_warning.svg"
                      className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[23px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[23px]"
                      alt="warning"
                    />
                    <Text
                      className="flex-grow font-normal sm:ml-[5px] md:ml-[7px] ml-[9px] not-italic text-blue_600"
                      variant="body2"
                    >
                      為確保您的個人資訊安全權益，註冊時需要您利用讀卡機讀取健保卡，造成不便還請見諒。
                    </Text>
                  </Row>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[26px] md:mt-[34px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                  <Button
                    className="common-pointer cursor-pointer font-bold min-w-[44%] text-[14px] text-center text-white_A700 w-[max-content]"
                    onClick={handleNavigate66}
                  >
                    上一步
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer font-bold min-w-[44%] sm:ml-[26px] md:ml-[34px] ml-[40px] text-[14px] text-center text-white_A700 w-[max-content]"
                    onClick={handleNavigate60}
                  >
                    下一步
                  </Button>
                </Row>
              </Column>
            </Column>
            <Img
              src="images/img_question.svg"
              className="sm:h-[24px] md:h-[31px] h-[35px] max-w-[100%] sm:ml-[65px] md:ml-[84px] ml-[98px] sm:mt-[420px] md:mt-[543px] mt-[632px] sm:w-[23px] md:w-[30px] w-[35px]"
              alt="question"
            />
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Three3Page;
