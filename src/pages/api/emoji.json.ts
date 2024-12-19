export async function GET({ }) {
    const emojis: string[] = [
        '😀', '😃', '😄', '😁', '😆', '🙂', '🙃', '🫠', '😉', '😊',
        '😇', '🥰', '😍', '🤩', '😘', '😗', '😚', '😙', '🥲', '😋',
        '😛', '😜', '🤪', '😝', '🤗', '🤭', '🫢', '🫣', '🤫', '🤔',
        '🫡', '🤨', '😐', '😑', '😶', '😶‍🌫️', '😶‍🌫', '😏', '😒', '😬',
        '🤥', '🫨', '🤥', '🫨', '😌', '😔', '😪', '🤤', '😷', '🤒',
        '🥴', '🤠', '🥳', '🥸', '😎', '🤓', '🧐', '😯', '😲', '🥺',
        '🥱', '💩', '🤡', '👹', '👺', '👻', '👽', '🤖', '😺', '😸',
        '😻', '😼', '😽', '🙈', '🙉', '🙊', '💋', '💯', '💫', '💨',
        '🐵', '🦍', '🐶', '🐱', '🐮', '🐷', '🐭', '🐰', '🐻', '🐼',
        '🐥', '🦉', '🐸', '🐙', '🍙', '🍖', '🥩', '🎃', '🎉', '㊗',
        '㊙',
    ];

    // サロゲートペア文字を省く
    // (Discordのusernameでは、サロゲートペア文字に対応していないっぽい)
    const filteredEmojis = emojis.filter(emoji => emoji.length <= 2 )

    return new Response(
        JSON.stringify(filteredEmojis)
    );
}