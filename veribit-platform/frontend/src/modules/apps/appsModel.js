import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import StringField from 'modules/shared/fields/stringField';

function label(name) {
  return i18n(`entities.apps.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  novi: new StringField('novi', label('novi'), {}),
  levo: new StringField('levo', label('levo'), {}),
  nosco: new StringField('nosco', label('nosco'), {}),
  scio: new StringField('scio', label('scio'), {}),
  disco: new StringField('disco', label('disco'), {}),
  indicium: new StringField('indicium', label('indicium'), {}),
  specto: new StringField('specto', label('specto'), {}),
  intelligo: new StringField('intelligo', label('intelligo'), {}),
  teneo: new StringField('teneo', label('teneo'), {}),
  percipio: new StringField('percipio', label('percipio'), {}),
  antikythera: new StringField('antikythera', label('antikythera'), {}),
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
