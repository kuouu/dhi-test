import React from "react";

import { Column, Row, Img, Text, Button, List, Stack } from "components";
import { useNavigate } from "react-router-dom";

const Page9 = () => {
  const navigate = useNavigate();

  function handleNavigate15() {
    navigate("/one11");
  }
  function handleNavigate23() {
    navigate("/page10");
  }
  function handleNavigate24() {
    navigate("/one9");
  }
  function handleNavigate25() {
    navigate("/one10");
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
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mt-[39px] md:mt-[50px] mt-[59px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
            <Column className="bg-blue_50 flex flex-col items-center justify-start sm:mb-[21px] md:mb-[28px] mb-[33px] sm:mx-[0] sm:p-[15px] md:p-[33px] p-[39px] rounded-radius8 sm:w-[100%] w-[86%]">
              <List
                className="sm:gap-[44px] md:gap-[57px] gap-[66.96px] grid min-h-[auto] sm:pt-[3px] md:pt-[5px] pt-[6px] sm:w-[100%] w-[54%]"
                orientation="vertical"
              >
                <Column className="flex flex-col items-center justify-start my-[0] sm:px-[0] w-[100%]">
                  <Text
                    className="text-black_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    健保註冊資訊管理
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[15px] md:mt-[20px] mt-[24px] w-[100%]">
                    <Column
                      className="common-pointer flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]"
                      onClick={handleNavigate23}
                    >
                      <Stack className="bg-indigo_800 h-[143px] sm:p-[15px] md:p-[34px] p-[40px] relative rounded-radius50 md:w-[123px] w-[143px] sm:w-[95px]">
                        <Img
                          src="images/img_group.svg"
                          className="absolute h-[53px] inset-x-[0] max-w-[100%] mx-[auto] top-[28%] w-[33%]"
                          alt="Group"
                        />
                      </Stack>
                      <Text
                        className="font-bold sm:mt-[19px] md:mt-[24px] mt-[29px] text-indigo_800 w-[auto]"
                        variant="body1"
                      >
                        註冊密碼變更
                      </Text>
                    </Column>
                    <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                      <Stack
                        className="common-pointer bg-indigo_800 h-[143px] sm:p-[15px] md:p-[39px] p-[46px] relative rounded-radius50 md:w-[123px] w-[143px] sm:w-[95px]"
                        onClick={handleNavigate24}
                      >
                        <Img
                          src="images/img_edit.svg"
                          className="absolute h-[48px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[31px] md:w-[41px] w-[48px]"
                          alt="edit"
                        />
                      </Stack>
                      <Text
                        className="font-bold sm:mt-[19px] md:mt-[24px] mt-[29px] text-indigo_800 w-[auto]"
                        variant="body1"
                      >
                        基本資料異動
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Column className="flex flex-col items-center justify-start my-[0] w-[100%]">
                  <Text
                    className="text-black_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    健保快易通 APP
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[15px] md:mt-[20px] mt-[24px] w-[100%]">
                    <Column
                      className="common-pointer flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%]"
                      onClick={handleNavigate25}
                    >
                      <Stack className="bg-indigo_800 h-[143px] sm:p-[15px] md:p-[33px] p-[39px] relative rounded-radius50 md:w-[123px] w-[143px] sm:w-[95px]">
                        <Img
                          src="images/img_mobile.svg"
                          className="absolute h-[64px] inset-[0] justify-center m-[auto] max-w-[100%] w-[28%]"
                          alt="mobile"
                        />
                      </Stack>
                      <Text
                        className="font-bold sm:mt-[19px] md:mt-[24px] mt-[29px] text-indigo_800 w-[auto]"
                        variant="body1"
                      >
                        行動裝置認證
                      </Text>
                    </Column>
                    <Column
                      className="common-pointer flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]"
                      onClick={handleNavigate15}
                    >
                      <Stack className="bg-indigo_800 h-[143px] sm:p-[15px] md:p-[35px] p-[41px] relative rounded-radius50 md:w-[123px] w-[143px] sm:w-[95px]">
                        <Img
                          src="images/img_computer.svg"
                          className="absolute h-[59px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[39px] md:w-[50px] w-[59px]"
                          alt="computer"
                        />
                      </Stack>
                      <Text
                        className="font-bold sm:mt-[19px] md:mt-[24px] mt-[29px] text-indigo_800 w-[auto]"
                        variant="body1"
                      >
                        行動裝置管理作業
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Column className="flex flex-col items-center justify-start my-[0] sm:px-[0] w-[100%]">
                  <Text
                    className="text-black_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    其他健保服務
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[15px] md:mt-[20px] mt-[24px] w-[100%]">
                    <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                      <Stack className="bg-indigo_800 h-[143px] sm:p-[15px] md:p-[36px] p-[43px] relative rounded-radius50 md:w-[123px] w-[143px] sm:w-[95px]">
                        <Img
                          src="images/img_map.svg"
                          className="absolute h-[47px] inset-[0] justify-center m-[auto] max-w-[100%] w-[39%]"
                          alt="map"
                        />
                      </Stack>
                      <Text
                        className="font-bold sm:mt-[19px] md:mt-[24px] mt-[29px] text-indigo_800 w-[auto]"
                        variant="body1"
                      >
                        健康存摺
                      </Text>
                    </Column>
                    <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                      <Stack className="bg-indigo_800 h-[143px] sm:p-[15px] md:p-[35px] p-[41px] relative rounded-radius50 md:w-[123px] w-[143px] sm:w-[95px]">
                        <Img
                          src="images/img_contrast.svg"
                          className="absolute h-[60px] inset-[0] justify-center m-[auto] max-w-[100%] w-[32%]"
                          alt="contrast"
                        />
                      </Stack>
                      <Text
                        className="font-bold sm:mt-[19px] md:mt-[24px] mt-[29px] text-indigo_800 w-[auto]"
                        variant="body1"
                      >
                        個人健保資料
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </List>
            </Column>
            <Img
              src="images/img_question.svg"
              className="sm:h-[24px] md:h-[31px] h-[35px] max-w-[100%] sm:ml-[63px] md:ml-[82px] ml-[96px] sm:mt-[637px] md:mt-[824px] mt-[958px] sm:w-[23px] md:w-[30px] w-[35px]"
              alt="question"
            />
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Page9;
