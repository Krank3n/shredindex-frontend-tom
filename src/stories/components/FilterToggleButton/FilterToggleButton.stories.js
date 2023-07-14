import React from 'react';
import {
  CCardHeader, CCol, CRow, CCard, CCardBody, CFormRange, CInputGroup, CFormInput, CFormLabel,
} from '@coreui/react';
import FilterToggleButtonComponent from '../../../js/components/FilterToggleButton/FilterToggleButton';

export default {
  title: 'Shred index/components/Filter Toggle Button',
  component: FilterToggleButtonComponent,
};

const updateFormStory = (id, toggle) => {
  console.log('id', id, 'toggleOn', toggle);
};

export const FilterToggleButton = () => (
  <>
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <p>Filter Toggle Button</p>
          </CCardHeader>
          <CCardBody>
            <FilterToggleButtonComponent
              id="1"
              label="Has a terrain park"
              tooltip="Big airs, smooth rails and delicious tricks"
              className="no-child"
              updateForm={updateFormStory}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <p>
              Filter Toggle Button
              <span className="small">&nbsp; with Children</span>
            </p>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              A form input can be added as a child within the filter button toggle.
            </p>
            <FilterToggleButtonComponent
              id="2"
              label="Snow Quality"
              tooltip={(
                <div>
                  <h4>Snow Quality</h4>
                  <strong>The finest, temperature and lastability of the snow</strong>
                </div>
                )}
              className="with-child"
              updateForm={updateFormStory}
            >
              <CFormLabel htmlFor="basic-url">Range Slider</CFormLabel>
              <CFormRange steps={10} />
              <CFormLabel htmlFor="basic-url">Text Input</CFormLabel>
              <CInputGroup className="mb-3">
                <CFormInput aria-label="Amount (to the nearest dollar)" />
              </CInputGroup>
            </FilterToggleButtonComponent>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </>
);
