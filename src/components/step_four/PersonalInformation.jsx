import { useState, useEffect } from "react";
import { Form, Input, Select, DatePicker, Button, Typography } from "antd";
import { useLanguage } from "../../hooks/useLanguage";
import psgcData from "../../../psgc.json";
const { Option } = Select;

const { Title } = Typography;

const PersonalInformation = ({ onSubmit }) => {
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
      // Personal Information
      firstName: values.firstName,
      middleName: values.middleName || "",
      lastName: values.lastName,
      suffix: values.suffix || "",
      birthdate: values.birthdate
        ? values.birthdate.format("YYYY-MM-DD")
        : null,
      gender: values.gender,

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

    console.log("Form Data:", formattedData);

    if (onSubmit) {
      onSubmit(formattedData);
    }
  };

  return (
    <div>
      <div className="text-center">
        <img
          src="/assets/step4/Provide_Supporting_Id.png"
          width={60}
          alt="Register SIM"
        />
      </div>
      <Title level={4} className="text-center-primary">
        {t("stepFour.personalDetailsDesc")}
      </Title>
      <p className="text-center text-gray">
        {t("stepFour.personalDetailsSubDesc")}
      </p>

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
          {/* Personal Information Section */}
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
                  src="/assets/personal_details_icon.png"
                  alt="Personal Info"
                  style={{ width: 30 }}
                />
                {t("stepFour.iconLabel")}
              </span>
              <span className="form-required-field">
                * {t("stepFour.formRequiredLabel")}
              </span>
            </div>
            <Form.Item
              label={t("stepFour.personalDetailsFirstnameLabel")}
              name="firstName"
              rules={[
                {
                  required: true,
                  message: `Please enter your ${t(
                    "stepFour.personalDetailsFirstnameLabel"
                  ).toLowerCase()}`,
                },
              ]}
              getValueFromEvent={(e) => e.target.value.toUpperCase()}
            >
              <Input
                placeholder={`Enter ${t(
                  "stepFour.personalDetailsFirstnameLabel"
                ).toLowerCase()}`}
              />
            </Form.Item>

            <Form.Item
              label={t("stepFour.personalDetailsMiddlenameLabel")}
              name="middleName"
              getValueFromEvent={(e) => e.target.value.toUpperCase()}
            >
              <Input
                placeholder={`Enter ${t(
                  "stepFour.personalDetailsMiddlenameLabel"
                ).toLowerCase()} (optional)`}
              />
            </Form.Item>

            <Form.Item
              label={t("stepFour.personalDetailsLastnameLabel")}
              name="lastName"
              rules={[
                {
                  required: true,
                  message: `Please enter your ${t(
                    "stepFour.personalDetailsLastnameLabel"
                  ).toLowerCase()}`,
                },
              ]}
              getValueFromEvent={(e) => e.target.value.toUpperCase()}
            >
              <Input
                placeholder={`Enter ${t(
                  "stepFour.personalDetailsLastnameLabel"
                ).toLowerCase()}`}
              />
            </Form.Item>

            <Form.Item
              label={t("stepFour.personalDetailsSuffixLabel")}
              name="suffix"
              getValueFromEvent={(e) => e.target.value.toUpperCase()}
            >
              <Input placeholder="Jr., Sr., III (optional)" />
            </Form.Item>

            <Form.Item
              label={t("stepFour.personalDetailsBirthdateLabel")}
              name="birthdate"
              rules={[
                {
                  required: true,
                  message: `Please select your ${t(
                    "stepFour.personalDetailsBirthdateLabel"
                  ).toLowerCase()}`,
                },
              ]}
            >
              <DatePicker
                style={{ width: "100%" }}
                format="YYYY/MM/DD"
                placeholder={`Select ${t(
                  "stepFour.personalDetailsBirthdateLabel"
                ).toLowerCase()}`}
              />
            </Form.Item>

            <Form.Item
              label={t("stepFour.personalDetailsGenderLabel")}
              name="gender"
              rules={[
                {
                  required: true,
                  message: `Please select your ${t(
                    "stepFour.personalDetailsGenderLabel"
                  ).toLowerCase()}`,
                },
              ]}
            >
              <Select
                placeholder={`Select ${t(
                  "stepFour.personalDetailsGenderLabel"
                ).toLowerCase()}`}
              >
                <Option value="M">Male</Option>
                <Option value="F">Female</Option>
                <Option value="O">Other</Option>
              </Select>
            </Form.Item>
          </div>

          {/* Address Section */}
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
                  src="/assets/location.png"
                  alt="Personal Info"
                  style={{ width: 30 }}
                />
                {t("stepFour.iconLabel")}
              </span>
              <span className="form-required-field">
                * {t("stepFour.formRequiredLabel")}
              </span>
            </div>

            <Form.Item
              label="Unit number, Building name"
              name="unitNumber"
              rules={[
                { required: true, message: "Please enter unit/building name" },
              ]}
              getValueFromEvent={(e) => e.target.value.toUpperCase()}
            >
              <Input placeholder="Enter unit number or building name" />
            </Form.Item>

            <Form.Item
              label="Street"
              name="street"
              rules={[{ required: true, message: "Please enter street" }]}
              getValueFromEvent={(e) => e.target.value.toUpperCase()}
            >
              <Input placeholder="Enter street name" />
            </Form.Item>

            <Form.Item
              label="Village or Subdivision"
              name="village"
              getValueFromEvent={(e) => e.target.value.toUpperCase()}
            >
              <Input placeholder="Enter village or subdivision (optional)" />
            </Form.Item>

            <Form.Item
              label="Province or State"
              name="province"
              rules={[{ required: true, message: "Please select province" }]}
            >
              <Select
                placeholder="Select province"
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
              label="City"
              name="city"
              rules={[{ required: true, message: "Please select city" }]}
            >
              <Select
                placeholder="Select city"
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
              label="Barangay"
              name="barangay"
              rules={[{ required: true, message: "Please select barangay" }]}
            >
              <Select
                placeholder="Select barangay"
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
              label="ZIP code"
              name="zipCode"
              rules={[
                { required: true, message: "Please enter ZIP code" },
                { pattern: /^\d{4}$/, message: "ZIP code must be 4 digits" },
              ]}
            >
              <Input placeholder="Enter 4-digit ZIP code" maxLength={4} />
            </Form.Item>
          </div>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" block size="large" onClick={onSubmit}>
              Continue
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default PersonalInformation;
