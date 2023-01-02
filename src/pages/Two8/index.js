import React from "react";

import { Column, Row, Img, Text, Button, Line, List } from "components";
import { useNavigate } from "react-router-dom";

const Two8Page = () => {
  const navigate = useNavigate();

  function handleNavigate13() {
    navigate("/one11");
  }
  function handleNavigate14() {
    navigate("/page9");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-notosanstc items-end justify-start mx-[auto] sm:p-[15px] md:p-[33px] p-[39px] w-[100%]">
        <Column className="flex flex-col justify-start max-w-[1011px] sm:mb-[3px] md:mb-[5px] mb-[6px] ml-[auto] sm:mr-[3px] md:mr-[5px] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
              <Img
                src="images/img_websiteicon.png"
                className="sm:h-[43px] md:h-[56px] h-[64px] rounded-radius50 sm:w-[42px] md:w-[55px] w-[64px]"
                alt="WebsiteIcon"
              />
              <Column className="flex flex-col items-center sm:mx-[0] md:p-[6px] p-[8px] sm:px-[0] sm:py-[5px] sm:w-[100%] w-[83%]">
                <Text
                  className="mt-[10px] sm:mt-[6px] md:mt-[8px] text-light_blue_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  健保卡網路服務註冊
                </Text>
              </Column>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[211px] ml-[246px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
              <Button
                className="cursor-pointer font-bold min-w-[46%] text-[14px] text-center text-light_blue_900 w-[max-content]"
                variant="FillBlue100"
              >
                登出
              </Button>
              <Button
                className="cursor-pointer font-bold min-w-[46%] text-[14px] text-center text-white_A700 w-[max-content]"
                variant="FillBlue700"
              >
                回首頁
              </Button>
            </Row>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mt-[39px] md:mt-[51px] mt-[60px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
            <Column className="bg-blue_50 flex flex-col items-center justify-start sm:mb-[17px] md:mb-[22px] mb-[26px] sm:mx-[0] sm:p-[15px] md:p-[32px] p-[38px] rounded-radius16 sm:w-[100%] w-[86%]">
              <Column className="flex flex-col items-center justify-start my-[2px] sm:pt-[3px] md:pt-[5px] pt-[6px] sm:px-[0] w-[100%]">
                <Column className="flex flex-col items-center justify-start w-[100%]">
                  <Text
                    className="text-black_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    行動裝置管理作業
                  </Text>
                  <Column className="flex flex-col items-center justify-start sm:mt-[39px] md:mt-[51px] mt-[60px] w-[100%]">
                    <Column className="flex flex-col justify-start sm:pt-[3px] md:pt-[4px] pt-[5px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                        <Text
                          className="font-bold mt-[1px] text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          平臺
                        </Text>
                        <Text
                          className="font-bold sm:ml-[27px] md:ml-[36px] ml-[42px] mt-[1px] text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          裝置型號
                        </Text>
                        <Text
                          className="font-bold sm:ml-[56px] md:ml-[73px] ml-[85px] mt-[1px] text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          裝置識別碼
                        </Text>
                        <Text
                          className="font-bold md:ml-[122px] ml-[142px] sm:ml-[94px] text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          認證時間
                        </Text>
                        <Text
                          className="font-bold sm:ml-[25px] md:ml-[33px] ml-[39px] mt-[1px] text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          狀態
                        </Text>
                      </Row>
                      <Line className="bg-bluegray_900 h-[1px] sm:mt-[12px] md:mt-[16px] mt-[19px] w-[100%]" />
                    </Column>
                    <List
                      className="sm:gap-[26px] md:gap-[34px] gap-[40px] grid min-h-[auto] sm:mt-[25px] md:mt-[33px] mt-[39px] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                        <Img
                          src="images/img_trash.svg"
                          className="sm:h-[27px] md:h-[35px] h-[40px] max-w-[100%] sm:w-[26px] md:w-[34px] w-[40px]"
                          alt="trash"
                        />
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          variant="body3"
                        >
                          HUAWEI_ALP-L29
                        </Text>
                        <Text
                          className="leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[27%]"
                          variant="body4"
                        >
                          91525486-0a1f-49a1-83a2-
                          <br />
                          68802e8cf733,8f27179ba1ed5ffa
                        </Text>
                        <Text
                          className="font-medium leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-bluegray_900 w-[10%] sm:w-[100%]"
                          variant="body3"
                        >
                          110/07/03
                          <br />
                          00:02:02
                        </Text>
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          variant="body3"
                        >
                          啟用中
                        </Text>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                          <Button
                            className="cursor-pointer font-bold text-[14px] text-center text-white_A700 w-[100%]"
                            shape="RoundedBorder4"
                            variant="FillIndigo800"
                          >
                            停用
                          </Button>
                          <Button
                            className="cursor-pointer font-bold sm:mt-[13px] md:mt-[17px] mt-[20px] text-[14px] text-center text-white_A700 w-[100%]"
                            shape="RoundedBorder4"
                            variant="FillIndigo800"
                          >
                            刪除
                          </Button>
                        </Column>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                        <Img
                          src="images/img_antdesignappl.svg"
                          className="sm:h-[27px] md:h-[35px] h-[40px] max-w-[100%] sm:w-[26px] md:w-[34px] w-[40px]"
                          alt="antdesignappl"
                        />
                        <Column className="flex flex-col sm:mx-[0] pr-[10px] md:pr-[8px] sm:px-[0] py-[10px] sm:py-[6px] md:py-[8px] sm:w-[100%] w-[17%]">
                          <Text
                            className="font-medium mt-[4px] text-bluegray_900 w-[auto]"
                            variant="body3"
                          >
                            IPHONE_12
                          </Text>
                        </Column>
                        <Text
                          className="leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[27%]"
                          variant="body4"
                        >
                          60bdc49b-4e5e-4202-9d7e-
                          <br />
                          51d75236b1a5,6b3fab72514803f3
                        </Text>
                        <Text
                          className="font-medium leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-bluegray_900 w-[10%] sm:w-[100%]"
                          variant="body3"
                        >
                          110/06/27 <br />
                          16:05:54
                        </Text>
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          variant="body3"
                        >
                          啟用中
                        </Text>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                          <Button
                            className="common-pointer cursor-pointer font-bold text-[14px] text-center text-white_A700 w-[100%]"
                            onClick={handleNavigate13}
                            shape="RoundedBorder4"
                            variant="FillIndigo800"
                          >
                            停用
                          </Button>
                          <Button
                            className="cursor-pointer font-bold sm:mt-[13px] md:mt-[17px] mt-[20px] text-[14px] text-center text-white_A700 w-[100%]"
                            shape="RoundedBorder4"
                            variant="FillIndigo800"
                          >
                            刪除
                          </Button>
                        </Column>
                      </Row>
                    </List>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start sm:mt-[39px] md:mt-[51px] mt-[60px] sm:mx-[0] sm:pt-[3px] md:pt-[4px] pt-[5px] sm:px-[0] sm:w-[100%] w-[85%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                    <Text
                      className="font-bold text-red_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      *
                    </Text>
                    <Text
                      className="font-normal md:ml-[11px] ml-[13px] sm:ml-[8px] mt-[1px] not-italic text-black_900 w-[auto]"
                      variant="body1"
                    >
                      若更換行動裝置或重新安裝APP時，請重新執行【行動裝置認證】
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[23px] md:mt-[30px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                    <Text
                      className="font-bold text-red_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      *
                    </Text>
                    <Text
                      className="font-normal md:ml-[11px] ml-[13px] sm:ml-[8px] mt-[1px] not-italic text-black_900 w-[auto]"
                      variant="body1"
                    >
                      同一個帳號可啟動多個行動裝置；多個帳號可在同一台裝置認證
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[16px] md:mt-[21px] mt-[25px] w-[100%]">
                    <Text
                      className="font-bold sm:mt-[3px] md:mt-[4px] mt-[5px] text-red_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      *
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] md:ml-[11px] ml-[13px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[97%]"
                      variant="body1"
                    >
                      請使用已通過裝置認證且狀態為「已啟用」之行動裝置登入「健保快易通」行動服務之APP，若您要使用其它行動裝置登入請點選上方【啟用裝置】按鈕，若尚未認證請至【行動裝置認證】產生QRCode後進行認證
                    </Text>
                  </Row>
                </Column>
                <Button
                  className="common-pointer cursor-pointer font-bold min-w-[20%] sm:mt-[39px] md:mt-[51px] mt-[60px] text-[14px] text-center text-white_A700 w-[max-content]"
                  onClick={handleNavigate14}
                >
                  回上頁
                </Button>
              </Column>
            </Column>
            <Img
              src="images/img_question.svg"
              className="sm:h-[24px] md:h-[31px] h-[35px] max-w-[100%] sm:ml-[63px] md:ml-[82px] ml-[96px] sm:mt-[567px] md:mt-[732px] mt-[852px] sm:w-[23px] md:w-[30px] w-[35px]"
              alt="question"
            />
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Two8Page;
