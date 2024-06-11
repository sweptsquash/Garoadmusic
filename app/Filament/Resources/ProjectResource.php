<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectResource\Pages;
use App\Models\Project;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Validation\Rules\File;
use Mohamedsabil83\FilamentFormsTinyeditor\Components\TinyEditor;

class ProjectResource extends Resource
{
    protected static ?string $model = Project::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->required()
                    ->minLength(3)
                    ->maxLength(255)
                    ->columnSpanFull(),

                SpatieMediaLibraryFileUpload::make('logo')
                    ->collection('logo')
                    ->image()
                    ->disk(config('media-library.disk_name'))
                    ->rules([
                        File::image()->max('5mb'),
                    ])
                    ->required()
                    ->columnSpanFull(),

                Toggle::make('show_logo')
                    ->columnSpanFull(),

                SpatieMediaLibraryFileUpload::make('cover')
                    ->collection('cover')
                    ->hint('Recommended size: 826x1080, must be no larger than 5MB')
                    ->image()
                    ->disk(config('media-library.disk_name'))
                    ->rules([
                        File::image()->max('5mb'),
                    ])
                    ->required()
                    ->columnSpanFull(),

                SpatieMediaLibraryFileUpload::make('banner')
                    ->collection('banner')
                    ->hint('Recommended size: 1920x1080, must be no larger than 5MB')
                    ->image()
                    ->disk(config('media-library.disk_name'))
                    ->rules([
                        File::image()->max('5mb'),
                    ])
                    ->required()
                    ->columnSpanFull(),

                TinyEditor::make('description')
                    ->setConvertUrls(false)
                    ->required()
                    ->columnSpanFull(),

                TextInput::make('developer')
                    ->minLength(3)
                    ->maxLength(255)
                    ->columnSpanFull(),

                TextInput::make('publisher')
                    ->minLength(3)
                    ->maxLength(255)
                    ->columnSpanFull(),

                TextInput::make('bandcamp_embed_url')
                    ->minLength(3)
                    ->maxLength(255)
                    ->columnSpanFull(),

                TextInput::make('soundcloud_embed_url')
                    ->minLength(3)
                    ->maxLength(255)
                    ->columnSpanFull(),

                TextInput::make('youtube_embed_url')
                    ->minLength(3)
                    ->maxLength(255)
                    ->columnSpanFull(),

                TinyEditor::make('quote')
                    ->setConvertUrls(false)
                    ->columnSpanFull(),

                TextInput::make('quote_author')
                    ->minLength(3)
                    ->maxLength(255)
                    ->columnSpanFull(),

                Repeater::make('links')
                    ->schema([
                        TextInput::make('name')
                            ->required(),
                        TextInput::make('url')
                            ->required(),
                    ])
                    ->default([])
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->modifyQueryUsing(fn ($query) => $query->orderByDesc('id'))
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            ProjectResource\RelationManagers\AlbumsRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProjects::route('/'),
            'create' => Pages\CreateProject::route('/create'),
            'edit' => Pages\EditProject::route('/{record}/edit'),
        ];
    }
}
