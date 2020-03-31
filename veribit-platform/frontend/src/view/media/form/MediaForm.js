import { Button, Form } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/media/mediaModel';
import React, { Component } from 'react';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
  tailFormItemLayout,
} from 'view/shared/styles/FormWrapper';
import FormSchema from 'view/shared/form/formSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import ImagesFormItem from 'view/shared/form/items/ImagesFormItem';
import FilesFormItem from 'view/shared/form/items/FilesFormItem';

const { fields } = model;

class MediaForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.txid,
    fields.files,
    fields.images,
    fields.description,
  ]);

  handleSubmit = (values) => {
    const { id, ...data } = this.schema.cast(values);
    this.props.onSubmit(id, data);
  };

  initialValues = () => {
    const record = this.props.record;
    return this.schema.initialValues(record || {});
  };

  renderForm() {
    const { saveLoading, isEditing } = this.props;

    return (
      <FormWrapper>
        <Formik
          initialValues={this.initialValues()}
          validationSchema={this.schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <Form onSubmit={form.handleSubmit}>
                {isEditing && (
                  <ViewFormItem
                    name={fields.id.name}
                    label={fields.id.label}
                  />
                )}

                <InputFormItem
                  name={fields.txid.name}
                  label={fields.txid.label}
                  required={fields.txid.required}
                  autoFocus
                />
                <FilesFormItem
                  name={fields.files.name}
                  label={fields.files.label}
                  required={fields.files.required}
                  path={fields.files.path}
                  schema={{
                    size: fields.files.size,
                    formats: fields.files.formats,
                  }}
                  max={fields.files.max}
                />
                <ImagesFormItem
                  name={fields.images.name}
                  label={fields.images.label}
                  required={fields.images.required}
                  path={fields.images.path}
                  schema={{
                    size: fields.images.size,
                  }}
                  max={fields.images.max}
                />
                <InputFormItem
                  name={fields.description.name}
                  label={fields.description.label}
                  required={fields.description.required}
                />

                <Form.Item
                  className="form-buttons"
                  {...tailFormItemLayout}
                >
                  <Button
                    loading={saveLoading}
                    type="primary"
                    onClick={form.handleSubmit}
                    icon="save"
                  >
                    {i18n('common.save')}
                  </Button>

                  <Button
                    disabled={saveLoading}
                    onClick={form.handleReset}
                    icon="undo"
                  >
                    {i18n('common.reset')}
                  </Button>

                  {this.props.onCancel ? (
                    <Button
                      disabled={saveLoading}
                      onClick={() => this.props.onCancel()}
                      icon="close"
                    >
                      {i18n('common.cancel')}
                    </Button>
                  ) : null}
                </Form.Item>
              </Form>
            );
          }}
        />
      </FormWrapper>
    );
  }

  render() {
    const { isEditing, findLoading, record } = this.props;

    if (findLoading) {
      return <Spinner />;
    }

    if (isEditing && !record) {
      return <Spinner />;
    }

    return this.renderForm();
  }
}

export default MediaForm;
