export async function GET({ }) {
    return new Response(
        JSON.stringify(
            {
                "otsurin": {
                    "ios": {
                        "isEnabledAd": false
                    },
                    "android": {
                        "isEnabledAd": false
                    }
                }
            }
        )
    )
}
