import React from 'react';
import mockAxios from 'axios';
import App from './App';
import { render, fireEvent} from '@testing-library/react';
import { mockShowData } from './mockShowData';

jest.mock("axios");

test("gets and renders show data", async() => {
    mockAxios.get.mockImplementation(() =>
        Promise.resolve({
            data: {
                id: 2993,
                name: "Stranger Things"
            }
        })
    )
});
