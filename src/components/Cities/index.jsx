import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import { selectedCitiesByPlace, changeCity, selectSelectedCity } from 'store/ducks/city';
import { selectSelectedPlace } from 'store/ducks/place';
import LocationList from '../LocationList/index';
import LocationForm from '../LocationForm/index';

const Cities = () => {
    const selectedPlace = useSelector(selectSelectedPlace);
    const selectedCity = useSelector(selectSelectedCity);

    const cities = useSelector((state) =>
        selectedCitiesByPlace(state, selectedPlace.id)
    );

    const dispatch = useDispatch();

    const handleChangeCity = useCallback(
        (id, name) => dispatch(changeCity(id, name)),
        [dispatch]
    );

    return (
        <Grid item md={6} xs={12}>
                <>  {selectedPlace &&
                        <LocationForm formType={'City'} />}
                    {cities.length > 0 && (
                    <LocationList
                        formType={'City'}
                        locations={cities}
                        changeLocale={handleChangeCity}
                        selected={selectedCity.id}
                    />)}
                </>

        </Grid>
    );
};

export default Cities;
