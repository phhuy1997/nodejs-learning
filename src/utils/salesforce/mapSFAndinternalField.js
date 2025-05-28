/**
 * @typedef {Object<string, string>} FieldMapping
 */

/**
 * @param {Array<Object>} records
 * @param {FieldMapping} mapping
 * @returns {Array<Object>}
 */
export const mapSFAndInternalField = (records, mapping) => {
  return records.map((record) => {
    const mapped = {};

    for (const [sfKey, internalKey] of Object.entries(mapping)) {
      mapped[internalKey] = record[sfKey];
    }

    return mapped;
  });
};

export const mapInternalToSFField = (internalEvent, mapping) => {
  const sfEvent = {};
  for (const [sfKey, internalKey] of Object.entries(mapping)) {
    sfEvent[sfKey] = internalEvent[internalKey] || null;
  }
  return sfEvent;
};

