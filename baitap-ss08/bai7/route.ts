import { NextResponse } from 'next/server';

let appConfig = {
  username: '',
  theme: 'light', 
  language: 'en', 
  timezone: 'UTC', 
};

export async function POST(request: Request) {
  try {
    const { username, theme, language, timezone } = await request.json();

    appConfig = {
      username: username || appConfig.username,
      theme: theme || appConfig.theme,
      language: language || appConfig.language,
      timezone: timezone || appConfig.timezone,
    };

    return NextResponse.json({
      message: 'Configuration saved successfully',
      config: appConfig,
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error saving configuration', error: error.message },
      { status: 500 }
    );
  }
}