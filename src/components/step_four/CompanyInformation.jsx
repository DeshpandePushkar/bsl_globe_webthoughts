import { useState, useEffect } from "react";
import { Form, Input, Select, Button, Typography } from "antd";
import { useLanguage } from "../../hooks/useLanguage";
import psgcData from "../../../psgc.json";

const { Option } = Select;
const { Title } = Typography;

const CompanyInformation = ({ onSubmit }) => {
  const { t } = useLanguage();
  const [form] = Form.useForm();

  // Address dropdown states
  const [regions, setRegions] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  const [barangays, setBarangays] = useState([]);

  // Selected values for cascading
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedMunicipality, setSelectedMunicipality] = useState(null);
  const [selectedBarangay, setSelectedBarangay] = useState(null);

  // Initialize regions on mount
  useEffect(() => {
    const regionsList = psgcData.map((region) => ({
      code: region.code,
      name: region.name,
    }));
    setRegions(regionsList);
  }, []);

  // Handle Region selection
  const handleRegionSelect = (regionCode, option) => {
    setSelectedRegion(option);

    // Find provinces for selected region
    const selectedRegionData = psgcData.find((r) => r.code === regionCode);
    if (selectedRegionData && selectedRegionData.provinces) {
      const provincesList = selectedRegionData.provinces.map((province) => ({
        code: province.code,
        name: province.name,
      }));
      setProvinces(provincesList);
    } else {
      setProvinces([]);
    }

    // Reset dependent fields
    setMunicipalities([]);
    setBarangays([]);
    form.setFieldsValue({
      province: undefined,
      city: undefined,
      barangay: undefined,
      zipCode: "",
    });
    setSelectedProvince(null);
    setSelectedMunicipality(null);
    setSelectedBarangay(null);
  };

  // Handle Province selection
  const handleProvinceSelect = (provinceCode, option) => {
    setSelectedProvince(option);

    // Find cities for selected province
    const selectedRegionData = psgcData.find(
      (r) => r.code === selectedRegion.value
    );
    if (selectedRegionData) {
      const selectedProvinceData = selectedRegionData.provinces.find(
        (p) => p.code === provinceCode
      );
      if (selectedProvinceData && selectedProvinceData.cities) {
        const citiesList = selectedProvinceData.cities.map((city) => ({
          code: city.code,
          name: city.name,
          zipcode: city.zipcode,
        }));
        setMunicipalities(citiesList);
      } else {
        setMunicipalities([]);
      }
    }

    // Reset dependent fields
    setBarangays([]);
    form.setFieldsValue({
      city: undefined,
      barangay: undefined,
      zipCode: "",
    });
    setSelectedMunicipality(null);
    setSelectedBarangay(null);
  };

  // Handle Municipality selection
  const handleMunicipalitySelect = (cityCode, option) => {
    setSelectedMunicipality(option);

    // Find barangays for selected city
    const selectedRegionData = psgcData.find(
      (r) => r.code === selectedRegion.value
    );
    if (selectedRegionData) {
      const selectedProvinceData = selectedRegionData.provinces.find(
        (p) => p.code === selectedProvince.value
      );
      if (selectedProvinceData) {
        const selectedCityData = selectedProvinceData.cities.find(
          (c) => c.code === cityCode
        );
        if (selectedCityData) {
          // Set barangays
          if (selectedCityData.barangays) {
            const barangaysList = selectedCityData.barangays.map(
              (barangay) => ({
                code: barangay.code,
                name: barangay.name,
              })
            );
            setBarangays(barangaysList);
          }

          // Auto-populate zipcode
          if (selectedCityData.zipcode) {
            form.setFieldsValue({ zipCode: selectedCityData.zipcode });
          }
        }
      }
    }

    // Reset barangay
    form.setFieldsValue({ barangay: undefined });
    setSelectedBarangay(null);
  };

  // Handle Barangay selection
  const handleBarangaySelect = (barangayCode, option) => {
    setSelectedBarangay(option);
  };

  // Handle form submission
  const handleSubmit = (values) => {
    const formattedData = {
      // Company Information
      companyName: values.companyName,

      // Address Information
      unitNumber: values.unitNumber,
      street: values.street,
      village: values.village || "",
      region: selectedRegion?.children,
      regionCode: selectedRegion?.value,
      province: selectedProvince?.children,
      provinceCode: selectedProvince?.value,
      city: selectedMunicipality?.children,
      cityCode: selectedMunicipality?.value,
      barangay: selectedBarangay?.children,
      barangayCode: selectedBarangay?.value,
      zipCode: values.zipCode,
    };

    console.log("Company Form Data:", formattedData);

    if (onSubmit) {
      onSubmit(formattedData);
    }
  };

  return (
    <div style={{ padding: "20px 0" }}>
      <div className="text-center">
        <img
          src="/assets/step4/Provide_Supporting_Id.png"
          width={60}
          alt="Register SIM"
        />
      </div>
      <Title level={4} className="text-center-primary">
        {t("stepFour.desc")}
      </Title>
      <p className="text-center text-gray">{t("stepFour.subDesc")}</p>

      <div className="step-four-form-container">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          autoComplete="off"
          initialValues={{
            province: "ILOCOS NORTE",
            city: "BACARRA",
            barangay: "Bani",
            zipCode: "2403",
          }}
        >
          {/* Company Details Section */}
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: 20,
              }}
            >
              <span className="step-item" style={{ gap: 4 }}>
                <img
                  src="/assets/location.png" //change icon not match with figma
                  alt="Personal Info"
                  style={{ width: 30 }}
                />
                {t("stepFour.detailsHeading")}
              </span>
              <span className="form-required-field">
                * {t("stepFour.formRequiredLabel")}
              </span>
            </div>

            <Form.Item
              label={t("stepFour.detailsInputLabel")}
              name="companyName"
              rules={[
                {
                  required: true,
                  message: `Please enter ${t(
                    "stepFour.detailsInputLabel"
                  ).toLowerCase()}`,
                },
              ]}
              getValueFromEvent={(e) => e.target.value.toUpperCase()}
            >
              <Input
                placeholder={`Enter ${t(
                  "stepFour.detailsInputLabel"
                ).toLowerCase()}`}
              />
            </Form.Item>
          </div>

          {/* Company Location Section */}
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: 20,
              }}
            >
              <span className="step-item" style={{ gap: 4 }}>
                <img
                  src="/assets/location.png" //change icon not match with figma
                  alt="Personal Info"
                  style={{ width: 30 }}
                />
                {t("stepFour.locationDetailsHeading")}
              </span>
              <span className="form-required-field">
                * {t("stepFour.formRequiredLabel")}
              </span>
            </div>

            <Form.Item
              label={t("stepFour.locationDetailsInputLabel1")}
              name="unitNumber"
              rules={[
                {
                  required: true,
                  message: `Please enter ${t(
                    "stepFour.locationDetailsInputLabel1"
                  ).toLowerCase()}`,
                },
              ]}
            >
              <Input
                placeholder={`Enter ${t(
                  "stepFour.locationDetailsInputLabel1"
                ).toLowerCase()}`}
              />
            </Form.Item>

            <Form.Item
              label={t("stepFour.locationDetailsInputLabel2")}
              name="street"
              rules={[
                {
                  required: true,
                  message: `Please enter ${t(
                    "stepFour.locationDetailsInputLabel2"
                  ).toLowerCase()}`,
                },
              ]}
              getValueFromEvent={(e) => e.target.value.toUpperCase()}
            >
              <Input
                placeholder={`Enter ${t(
                  "stepFour.locationDetailsInputLabel2"
                ).toLowerCase()}`}
              />
            </Form.Item>

            <Form.Item
              label={t("stepFour.locationDetailsInputLabel3")}
              name="village"
              getValueFromEvent={(e) => e.target.value.toUpperCase()}
            >
              <Input
                placeholder={`Enter ${t(
                  "stepFour.locationDetailsInputLabel3"
                ).toLowerCase()} (optional)`}
              />
            </Form.Item>

            <Form.Item
              label={t("stepFour.locationDetailsInputLabel4")}
              name="province"
              rules={[
                {
                  required: true,
                  message: `Please select ${t(
                    "stepFour.locationDetailsInputLabel4"
                  ).toLowerCase()}`,
                },
              ]}
            >
              <Select
                placeholder={`Select ${t(
                  "stepFour.locationDetailsInputLabel4"
                ).toLowerCase()}`}
                onSelect={handleProvinceSelect}
                disabled={provinces.length === 0}
              >
                {provinces.map((province) => (
                  <Option key={province.code} value={province.code}>
                    {province.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label={t("stepFour.locationDetailsInputLabel5")}
              name="city"
              rules={[
                {
                  required: true,
                  message: `Please select ${t(
                    "stepFour.locationDetailsInputLabel5"
                  ).toLowerCase()}`,
                },
              ]}
            >
              <Select
                placeholder={`Select ${t(
                  "stepFour.locationDetailsInputLabel5"
                ).toLowerCase()}`}
                onSelect={handleMunicipalitySelect}
                disabled={municipalities.length === 0}
              >
                {municipalities.map((city) => (
                  <Option key={city.code} value={city.code}>
                    {city.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label={t("stepFour.locationDetailsInputLabel6")}
              name="barangay"
              rules={[
                {
                  required: true,
                  message: `Please select ${t(
                    "stepFour.locationDetailsInputLabel6"
                  ).toLowerCase()}`,
                },
              ]}
            >
              <Select
                placeholder={`Select ${t(
                  "stepFour.locationDetailsInputLabel6"
                ).toLowerCase()}`}
                onSelect={handleBarangaySelect}
                disabled={barangays.length === 0}
              >
                {barangays.map((barangay) => (
                  <Option key={barangay.code} value={barangay.code}>
                    {barangay.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label={t("stepFour.locationDetailsInputLabel7")}
              name="zipCode"
              rules={[
                {
                  required: true,
                  message: `Please enter ${t(
                    "stepFour.locationDetailsInputLabel7"
                  ).toLowerCase()}`,
                },
                {
                  pattern: /^\d{4}$/,
                  message: `${t(
                    "stepFour.locationDetailsInputLabel7"
                  )} must be 4 digits`,
                },
              ]}
            >
              <Input placeholder="Enter 4-digit ZIP code" maxLength={4} />
            </Form.Item>
          </div>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" block size="large" onClick={onSubmit}>
              {t("stepFour.companyLocationPrimaryBtn")}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CompanyInformation;
