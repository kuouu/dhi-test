import React from "react";

import { Column, Row, Img, Text, Stack, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const WindowsPage = () => {
  const navigate = useNavigate();

  function handleNavigate26() {
    navigate("/page1");
  }
  function handleNavigate27() {
    navigate("/macone");
  }
  function handleNavigate28() {
    navigate("/page");
  }
  function handleNavigate29() {
    navigate("/four");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-notosanstc items-end justify-start mx-[auto] sm:p-[15px] md:p-[33px] p-[39px] w-[100%]">
        <Column className="flex flex-col justify-start max-w-[1012px] sm:mb-[3px] md:mb-[5px] mb-[6px] ml-[auto] sm:mr-[3px] md:mr-[4px] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Row
            className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]"
            onClick={handleNavigate26}
          >
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
          <Text
            className="sm:ml-[217px] md:ml-[280px] ml-[326px] sm:mt-[28px] md:mt-[36px] mt-[43px] text-indigo_800 w-[auto]"
            as="h4"
            variant="h4"
          >
            登入健保卡網路服務系統
          </Text>
          <Column className="flex flex-col justify-start ml-[105px] md:ml-[90px] sm:mt-[24px] md:mt-[31px] mt-[37px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
            <Stack className="h-[64px] md:px-[13px] sm:px-[15px] px-[16px] relative sm:w-[100%] w-[84%]">
              <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[3%] sm:w-[100%] w-[95%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                  <Column className="flex flex-col items-center mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[30%]">
                        <Column className="bg-blue_600 flex flex-col sm:h-[20px] md:h-[25px] h-[29px] items-center justify-end px-[4px] rounded-radius50 sm:w-[19px] md:w-[24px] w-[29px]">
                          <Text
                            className="font-bold mt-[1px] text-white_A700 w-[auto]"
                            variant="body1"
                          >
                            1
                          </Text>
                        </Column>
                        <Text
                          className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-indigo_800 w-[auto]"
                          variant="body1"
                        >
                          安裝讀卡機元件
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[30%]">
                        <Column className="bg-blue_100 flex flex-col sm:h-[20px] md:h-[25px] h-[29px] items-center justify-end px-[4px] rounded-radius50 sm:w-[19px] md:w-[24px] w-[29px]">
                          <Text
                            className="font-bold mt-[1px] text-white_A700 w-[auto]"
                            variant="body1"
                          >
                            2
                          </Text>
                        </Column>
                        <Text
                          className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-gray_400 w-[auto]"
                          variant="body1"
                        >
                          健保卡讀取確認
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
                    <Column className="bg-blue_100 flex flex-col sm:h-[20px] md:h-[25px] h-[29px] items-center justify-end px-[4px] rounded-radius50 sm:w-[19px] md:w-[24px] w-[29px]">
                      <Text
                        className="font-bold mt-[1px] text-white_A700 w-[auto]"
                        variant="body1"
                      >
                        3
                      </Text>
                    </Column>
                    <Text
                      className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-gray_400 w-[auto]"
                      variant="body1"
                    >
                      填寫登入資訊
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-center sm:mx-[0] mx-[auto] sm:px-[0] top-[23%] sm:w-[100%] w-[76%]">
                <Line className="bg-blue_600 h-[2px] sm:w-[100%] w-[48%]" />
                <Line className="bg-gray_400 h-[2px] sm:ml-[17px] md:ml-[23px] ml-[27px] sm:w-[100%] w-[48%]" />
              </Row>
            </Stack>
            <Column className="flex flex-col items-center justify-start sm:mt-[22px] md:mt-[29px] mt-[34px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                <Button
                  className="cursor-pointer font-bold min-w-[23%] text-[18px] text-center text-white_A700 w-[max-content]"
                  shape="CustomBorderTL16"
                  size="xl"
                >
                  Windows
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-bold mb-[11px] sm:mb-[7px] md:mb-[9px] min-w-[23%] text-[18px] text-center text-white_A700 w-[max-content]"
                  onClick={handleNavigate27}
                  shape="CustomBorderTL16"
                  size="lg"
                  variant="FillBlue100"
                >
                  Mac
                </Button>
                <Button
                  className="cursor-pointer font-bold mb-[11px] sm:mb-[7px] md:mb-[9px] min-w-[23%] text-[18px] text-center text-white_A700 w-[max-content]"
                  shape="CustomBorderTL16"
                  size="lg"
                  variant="FillBlue100"
                >
                  Linux (Ubuntu)
                </Button>
                <Button
                  className="cursor-pointer font-bold mb-[11px] sm:mb-[7px] md:mb-[9px] min-w-[23%] text-[18px] text-center text-white_A700 w-[max-content]"
                  shape="CustomBorderTL16"
                  size="lg"
                  variant="FillBlue100"
                >
                  Linux (Fedora)
                </Button>
              </Row>
              <Column className="bg-blue_50 flex flex-col items-center justify-start sm:p-[15px] md:p-[55px] p-[64px] w-[100%]">
                <Text className="text-black_900 w-[auto]" as="h5" variant="h5">
                  請安裝讀卡機元件以利讀取健保卡
                </Text>
                <Text
                  className="font-medium leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[26px] md:mt-[34px] mt-[40px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[55%]"
                  variant="body2"
                >
                  下載元件安裝檔之前，請先暫停或關閉您的防毒軟體，避免下載受到阻擋或是造成安裝失敗。
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
                      className="font-medium leading-[18.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-center text-white_A700 sm:w-[100%] w-[93%]"
                      variant="body3"
                    >
                      閱讀 Windows
                      <br />
                      元件安裝手冊
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Column>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[12px] mt-[15px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
              <Img
                src="images/img_warning.svg"
                className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[23px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[23px]"
                alt="warning"
              />
              <Text
                className="flex-grow font-normal sm:ml-[5px] md:ml-[7px] ml-[9px] not-italic text-blue_600"
                variant="body2"
              >
                為確保您的個人資訊安全權益，登入時需要您利用讀卡機讀取健保卡，造成不便還請見諒。
              </Text>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mt-[23px] md:mt-[30px] mt-[36px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                <Button
                  className="common-pointer cursor-pointer font-bold min-w-[44%] text-[14px] text-center text-white_A700 w-[max-content]"
                  onClick={handleNavigate28}
                >
                  上一步
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-bold min-w-[44%] text-[14px] text-center text-white_A700 w-[max-content]"
                  onClick={handleNavigate29}
                >
                  下一步
                </Button>
              </Row>
              <Img
                src="images/img_question.svg"
                className="sm:h-[24px] md:h-[31px] h-[35px] max-w-[100%] sm:ml-[220px] md:ml-[284px] ml-[331px] sm:mt-[3px] md:mt-[4px] mt-[5px] sm:w-[23px] md:w-[30px] w-[35px]"
                alt="question"
              />
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default WindowsPage;
