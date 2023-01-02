import React from "react";

import { Column, Row, Img, Text, Stack, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const MacOne1Page = () => {
  const navigate = useNavigate();

  function handleNavigate99() {
    navigate("/mactwo1");
  }
  function handleNavigate100() {
    navigate("/page5");
  }
  function handleNavigate101() {
    navigate("/two2");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-notosanstc items-end justify-end mx-[auto] sm:p-[15px] md:p-[28px] p-[33px] w-[100%]">
        <Column className="flex flex-col justify-start max-w-[1011px] ml-[auto] md:mr-[10px] sm:mr-[7px] mr-[auto] sm:mt-[3px] md:mt-[5px] mt-[6px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
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
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mt-[22px] md:mt-[29px] mt-[34px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
            <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
              <Text className="text-indigo_800 w-[auto]" as="h4" variant="h4">
                註冊健保卡網路服務系統
              </Text>
              <Stack className="h-[64px] sm:mt-[26px] md:mt-[34px] mt-[40px] sm:pr-[15px] md:pr-[21px] pr-[25px] relative w-[100%]">
                <Stack className="absolute h-[64px] sm:w-[100%] w-[89%]">
                  <Stack className="absolute h-[64px] left-[0] sm:w-[100%] w-[78%]">
                    <Stack className="absolute h-[64px] left-[0] sm:w-[100%] w-[71%]">
                      <Stack className="absolute h-[64px] left-[0] md:pl-[13px] sm:pl-[15px] pl-[16px] sm:w-[100%] w-[58%]">
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
                      <Stack className="absolute h-[64px] md:pl-[13px] sm:pl-[15px] pl-[16px] right-[0] sm:w-[100%] w-[60%]">
                        <Line className="absolute bg-gray_400 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[60%]" />
                        <Column className="absolute flex flex-col items-center justify-start left-[25%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
                          <Text
                            className="bg-blue_100 flex font-bold items-center sm:px-[5px] md:px-[7px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                            variant="body1"
                          >
                            2
                          </Text>
                          <Text
                            className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-gray_400 w-[auto]"
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
              <Column className="flex flex-col justify-start sm:mt-[26px] md:mt-[34px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                <Column className="flex flex-col items-center justify-start w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Button
                      className="cursor-pointer font-bold min-w-[23%] text-[18px] text-center text-white_A700 w-[max-content]"
                      shape="CustomBorderTL20"
                      size="xl"
                    >
                      Windows
                    </Button>
                    <Button
                      className="common-pointer cursor-pointer font-bold mb-[11px] sm:mb-[7px] md:mb-[9px] min-w-[23%] text-[18px] text-center text-white_A700 w-[max-content]"
                      onClick={handleNavigate99}
                      shape="CustomBorderTL20"
                      size="lg"
                      variant="FillBlue100"
                    >
                      Mac
                    </Button>
                    <Button
                      className="cursor-pointer font-bold mb-[11px] sm:mb-[7px] md:mb-[9px] min-w-[23%] text-[18px] text-center text-white_A700 w-[max-content]"
                      shape="CustomBorderTL20"
                      size="lg"
                      variant="FillBlue100"
                    >
                      Linux (Ubuntu)
                    </Button>
                    <Button
                      className="cursor-pointer font-bold mb-[11px] sm:mb-[7px] md:mb-[9px] min-w-[23%] text-[18px] text-center text-white_A700 w-[max-content]"
                      shape="CustomBorderTL20"
                      size="lg"
                      variant="FillBlue100"
                    >
                      Linux (Fedora)
                    </Button>
                  </Row>
                  <Column className="bg-blue_50 flex flex-col items-center justify-start sm:p-[15px] md:p-[55px] p-[64px] w-[100%]">
                    <Text
                      className="text-black_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      請安裝讀卡機元件以利讀取健保卡
                    </Text>
                    <Text
                      className="font-medium leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[26px] md:mt-[34px] mt-[40px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[47%]"
                      variant="body3"
                    >
                      下載元件安裝檔之前，請先暫停或關閉您的防毒軟體，避免下載受到阻擋或是造成安裝失敗
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[26px] md:mt-[34px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                      <Column className="bg-indigo_800 flex flex-col items-center sm:mx-[0] p-[10px] sm:p-[6px] md:p-[8px] rounded-radius8 sm:w-[100%] w-[43%]">
                        <Text
                          className="font-medium leading-[18.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-center text-white_A700 sm:w-[100%] w-[61%]"
                          variant="body3"
                        >
                          Windows
                          <br />
                          元件下載
                        </Text>
                      </Column>
                      <Column className="bg-indigo_800 flex flex-col items-center md:ml-[34px] ml-[40px] sm:mx-[0] p-[10px] sm:p-[6px] md:p-[8px] rounded-radius8 sm:w-[100%] w-[43%]">
                        <Text
                          className="font-medium leading-[18.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-center text-white_A700 sm:w-[100%] w-[84%]"
                          variant="body3"
                        >
                          Windows
                          <br />
                          元件安裝手冊
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
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
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[26px] md:mt-[34px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                <Button
                  className="common-pointer cursor-pointer font-bold min-w-[44%] text-[14px] text-center text-white_A700 w-[max-content]"
                  onClick={handleNavigate100}
                >
                  上一步
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-bold min-w-[44%] sm:ml-[26px] md:ml-[34px] ml-[40px] text-[14px] text-center text-white_A700 w-[max-content]"
                  onClick={handleNavigate101}
                >
                  下一步
                </Button>
              </Row>
            </Column>
            <Img
              src="images/img_question.svg"
              className="sm:h-[24px] md:h-[31px] h-[35px] max-w-[100%] ml-[101px] sm:ml-[67px] md:ml-[86px] sm:mt-[438px] md:mt-[566px] mt-[658px] sm:w-[23px] md:w-[30px] w-[35px]"
              alt="question"
            />
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default MacOne1Page;
