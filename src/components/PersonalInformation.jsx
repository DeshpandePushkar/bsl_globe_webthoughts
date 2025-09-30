import { useState, useEffect } from "react";
import { Form, Input, Select, DatePicker, Button } from "antd";
import { useLanguage } from "../hooks/useLanguage";
import psgcData from "../../psgc.json";
const { Option } = Select;

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
    <div style={{ padding: "20px 0" }}>
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "600",
          color: "#1e3a8a",
          marginBottom: "8px",
        }}
      >
        {t("stepFour.number")} {t("stepFour.mainDesc")}
      </h2>

      <p style={{ color: "#6b7280", marginBottom: "24px", fontSize: "14px" }}>
        {t("stepFour.personalDetailsSubDesc")}
      </p>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        autoComplete="off"
      >
        {/* Personal Information Section */}
        <div
          style={{
            marginBottom: "32px",
            padding: "20px",
            backgroundColor: "#f9fafb",
            borderRadius: "8px",
          }}
        >
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <img
              src="/assets/personal_details_icon.png"
              alt="Personal Info"
              style={{ width: "24px", height: "24px" }}
            />
            {t("stepFour.detailsHeading")}
            <span
              style={{ color: "#ef4444", fontSize: "14px", marginLeft: "4px" }}
            >
              * {t("stepFour.formRequiredLabel")}
            </span>
          </h3>

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
              format="MM/DD/YYYY"
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
        <div
          style={{
            marginBottom: "32px",
            padding: "20px",
            backgroundColor: "#f9fafb",
            borderRadius: "8px",
          }}
        >
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <img
              src="/assets/location.png"
              alt="Address"
              style={{ width: "24px", height: "24px" }}
            />
            SIM Registration Details
            <span
              style={{ color: "#ef4444", fontSize: "14px", marginLeft: "4px" }}
            >
              * Required
            </span>
          </h3>

          <Form.Item
            label="Unit number, Building name"
            name="unitNumber"
            rules={[
              { required: true, message: "Please enter unit/building name" },
            ]}
          >
            <Input placeholder="Enter unit number or building name" />
          </Form.Item>

          <Form.Item
            label="Street"
            name="street"
            rules={[{ required: true, message: "Please enter street" }]}
          >
            <Input placeholder="Enter street name" />
          </Form.Item>

          <Form.Item label="Village or Subdivision" name="village">
            <Input placeholder="Enter village or subdivision (optional)" />
          </Form.Item>

          {/* <Form.Item
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
          </Form.Item> */}
        </div>

        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            style={{
              backgroundColor: "#3b82f6",
              borderColor: "#3b82f6",
              height: "48px",
              fontSize: "16px",
              fontWeight: "500",
              borderRadius: "8px",
            }}
          >
            Continue
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PersonalInformation;
