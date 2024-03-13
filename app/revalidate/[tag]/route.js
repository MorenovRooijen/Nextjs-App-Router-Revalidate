
import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server';
 

export async function GET(request,context) {
    const tag = context.params.tag;
    await revalidateTag(tag);
    console.log('revalidated tag', tag)
    return NextResponse.json({ message: 'revalidated tag '+ tag }, { status: 200 })

}