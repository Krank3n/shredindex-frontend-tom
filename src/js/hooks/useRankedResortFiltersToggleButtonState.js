import { useEffect, useState } from 'react';

/**
 * Reference a ranked resort filter toggleOn state from local storage
 *
 * @param {string} filterToggleButtonID
 * @return {[boolean, function]}
 */
const useRankedResortFiltersToggleButtonState = (filterToggleButtonID) => {
  const storeToggleOn = (collapsed) => {
    const currentState = localStorage.getItem('rankedResortFilterToggleState') || 'io'; // e.g "io_1_2_3_4_5"
    // Get the state without the current resort's id
    const newStateArray = currentState.split('_').filter((id) => id !== filterToggleButtonID);

    if (collapsed) {
      newStateArray.push(filterToggleButtonID);
    }

    localStorage.setItem('rankedResortFilterToggleState', newStateArray.join('_'));
  };

  const storedAsToggleOn = () => {
    const currentState = localStorage.getItem('rankedResortFilterToggleState') || ''; // e.g "1_2_3_4_5"

    return currentState.split('_').some((id) => id === filterToggleButtonID);
  };

  const [toggleOn, setToggleOn] = useState(storedAsToggleOn());

  useEffect(() => {
    storeToggleOn(toggleOn);
  }, [toggleOn]);

  return [toggleOn, setToggleOn];
};

export default useRankedResortFiltersToggleButtonState;
