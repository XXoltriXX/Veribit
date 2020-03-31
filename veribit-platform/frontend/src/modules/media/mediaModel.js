import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import StringField from 'modules/shared/fields/stringField';
import FilesField from 'modules/shared/fields/filesField';
import ImagesField from 'modules/shared/fields/imagesField';

function label(name) {
  return i18n(`entities.media.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  txid: new StringField('txid', label('txid'), {}),
  files: new FilesField('files', label('files'), 'media/files',{}),
  images: new ImagesField('images', label('images'), 'media/images',{}),
  description: new StringField('description', label('description'), {}),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),

};

export default {
  fields,
};
