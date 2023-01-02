import React from "react";

import { Column, Row, Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const One3Page = () => {
  const navigate = useNavigate();

  function handleNavigate35() {
    navigate("/page1");
  }
  function handleNavigate36() {
    navigate("/page1");
  }
  function handleNavigate37() {
    navigate("/");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-notosanstc items-end justify-end mx-[auto] sm:p-[15px] md:p-[29px] p-[34px] w-[100%]">
        <Column className="flex flex-col justify-start max-w-[1012px] ml-[auto] sm:mr-[6px] md:mr-[8px] mr-[auto] sm:mt-[3px] md:mt-[4px] mt-[5px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Row
            className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]"
            onClick={handleNavigate35}
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
            className="sm:ml-[217px] md:ml-[280px] ml-[326px] sm:mt-[22px] md:mt-[29px] mt-[34px] text-indigo_800 w-[auto]"
            as="h4"
            variant="h4"
          >
            註冊健保卡網路服務系統
          </Text>
          <Column className="flex flex-col justify-start md:ml-[68px] ml-[80px] sm:mt-[23px] md:mt-[30px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
            <Column className="bg-blue_50 flex flex-col items-center justify-start sm:mx-[0] sm:p-[15px] md:p-[51px] p-[60px] rounded-radius8 sm:w-[100%] w-[86%]">
              <Text className="text-black_900 w-[auto]" as="h5" variant="h5">
                請先備齊註冊所需設備及文件
              </Text>
              <Column className="flex flex-col justify-start sm:mt-[31px] md:mt-[40px] mt-[47px] sm:mx-[0] sm:px-[0] py-[1px] sm:w-[100%] w-[14%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                  <Text
                    className="font-bold text-red_500 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    *
                  </Text>
                  <Text
                    className="font-bold sm:ml-[5px] md:ml-[6px] ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[5px] text-bluegray_900 w-[auto]"
                    variant="body1"
                  >
                    健保卡
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[17px] md:mt-[22px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                  <Text
                    className="font-bold text-red_500 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    *
                  </Text>
                  <Text
                    className="font-bold sm:ml-[5px] md:ml-[6px] ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[5px] text-bluegray_900 w-[auto]"
                    variant="body1"
                  >
                    讀卡機
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mb-[1px] sm:mt-[17px] md:mt-[22px] mt-[26px] w-[100%]">
                  <Text
                    className="font-bold text-red_500 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    *
                  </Text>
                  <Text
                    className="font-bold sm:ml-[5px] md:ml-[6px] ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[5px] text-bluegray_900 w-[auto]"
                    variant="body1"
                  >
                    戶口名簿
                  </Text>
                </Row>
              </Column>
            </Column>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[11px] md:mt-[14px] mt-[17px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
              <Img
                src="images/img_warning.svg"
                className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[23px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[23px]"
                alt="warning"
              />
              <Text
                className="flex-grow font-normal sm:ml-[5px] md:ml-[7px] ml-[9px] mt-[2px] not-italic text-blue_600"
                variant="body2"
              >
                為確保個人資訊安全權益，註冊時需要您利用讀卡機讀取健保卡，並填寫戶號等基本資料，造成不便還請見諒。
              </Text>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mt-[16px] md:mt-[21px] mt-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[3px] md:mt-[4px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                <Button
                  className="common-pointer cursor-pointer font-bold min-w-[44%] text-[14px] text-center text-white_A700 w-[max-content]"
                  onClick={handleNavigate36}
                >
                  回首頁
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-bold min-w-[44%] text-[14px] text-center text-white_A700 w-[max-content]"
                  onClick={handleNavigate37}
                >
                  確認
                </Button>
              </Row>
              <Img
                src="images/img_question.svg"
                className="sm:h-[24px] md:h-[31px] h-[35px] max-w-[100%] sm:ml-[223px] md:ml-[288px] ml-[335px] sm:w-[23px] md:w-[30px] w-[35px]"
                alt="question"
              />
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default One3Page;
