export async function GET({ }) {
    return new Response(
        JSON.stringify(
            {
                "otsurin": {
                    "ios": {
                        "isEnabledAd": true
                    },
                    "android": {
                        "isEnabledAd": false
                    }
                }
            }
        )
    )
}
