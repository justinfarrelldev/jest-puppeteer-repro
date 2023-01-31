/**
 * @jest-environment puppeteer
 */

import { HTTPRequest } from "puppeteer"

describe('example', () => {
    it('should not have an error conflict', () => {
        page.on('request', async (req: HTTPRequest) => {
        })
        page.on('request', (req) => {
            if (req.isInterceptResolutionHandled()) return null; 
        })
    })
})