import fs from 'node:fs/promises'
import path from 'node:path'
import QRCode from 'qrcode'
import astroConfig from '../astro.config.mjs'

// 出力先
const OUTPUT_PATH = path.resolve(
    process.cwd(),
    'src/images/qr.png'
)
const SITE_URL = astroConfig.site

async function main() {
    if (!SITE_URL) {
        console.error('Error: SITE_URL is not defined in astro.config.mjs')
        return
    }

    console.log(`Generating QR for: ${SITE_URL}`)

    const buffer = await QRCode.toBuffer(SITE_URL, {
        width: 512,
        errorCorrectionLevel: 'H',
        type: 'png',
    })

    await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true })
    await fs.writeFile(OUTPUT_PATH, buffer)

    console.log(`QR saved to: ${OUTPUT_PATH}`)
}

main().catch((err) => {
    console.error(err)
    process.exit(1)
})
