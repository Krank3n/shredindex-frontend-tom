import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import wait from 'waait';
import useRankedResortFiltersToggleButtonState from '../useRankedResortFiltersToggleButtonState';

describe('useResortFilterButtonToggle hook', () => {
  it('Retrieves the correct initial state from local storage', () => {
    let actual;
    const toggleButtonId = '1';
    localStorage.setItem('resortFilterButtonToggleState', `io_${toggleButtonId}`);
    const TestHook = () => {
      actual = useRankedResortFiltersToggleButtonState(toggleButtonId);
      return null;
    };

    mount(<TestHook />);

    expect(actual[0]).toBe(true);
  });

  it('Updates local storage correctly when storeExpanded is called', async () => {
    let storeExpanded;
    const toggleButtonId = '1';
    localStorage.setItem('resortFilterButtonToggleState', 'io');
    const TestHook = () => {
      const [collapsed, setStoreExpanded] = useRankedResortFiltersToggleButtonState(toggleButtonId);
      storeExpanded = setStoreExpanded;
      return collapsed;
    };

    mount(<TestHook />);

    await act(async () => {
      storeExpanded(true);
    });

    await act(wait);
    expect(localStorage.getItem('resortFilterButtonToggleState')).toBe(`io_${toggleButtonId}`);

    await act(async () => {
      storeExpanded(false);
    });
    await act(wait);
    expect(localStorage.getItem('resortFilterButtonToggleState')).toBe('io');
  });
});
