import fs from 'fs-extra';
import path from 'path';

const PageUpdateFilePath = ((): string => {
  return path.resolve(__dirname, 'page-update');
})();

const ScrapedDataFilePath = ((): string => {
  return path.resolve(__dirname, 'scrape-data');
})();

export const getPageUpdatedTime = async (): Promise<string | null> => {
  try {
    const content = await fs.promises.readFile(PageUpdateFilePath, {
      encoding: 'utf-8',
    });

    return content;
  } catch (e) {
    console.error(`Error while reading page-update file: ${e.message}`);
    return null;
  }
};

export const getLastScapedTime = async (): Promise<string | null> => {
  try {
    const content = await fs.promises.readFile(ScrapedDataFilePath, {
      encoding: 'utf-8',
    });

    return content;
  } catch (e) {
    console.error(`Error while reading scrape-data file: ${e.message}`);
    return null;
  }
};

export const updatePageUpdateTime = async (date: Date): Promise<void> => {
  try {
    await fs.promises.writeFile(PageUpdateFilePath, date.toISOString());
  } catch (e) {
    console.error(`Error while updating page update time: ${e.message}`);
  }
};

export const updateLastScrapedTime = async (date: Date): Promise<void> => {
  try {
    await fs.promises.writeFile(ScrapedDataFilePath, date.toISOString());
  } catch (e) {
    console.error(`Error while updating data scraped time: ${e.message}`);
  }
};
